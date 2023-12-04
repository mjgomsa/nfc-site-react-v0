import hashlib
import time
from flask import Flask, request, jsonify


class Block:
    def __init__(self, index, previous_hash, timestamp, data, hash, nonce):
        self.index = index
        self.previous_hash = previous_hash
        self.timestamp = timestamp
        self.data = data
        self.hash = hash
        self.nonce = nonce


def calculate_hash(index, previous_hash, timestamp, data, nonce):
    value = str(index) + str(previous_hash) + \
        str(timestamp) + str(data) + str(nonce)
    return hashlib.sha256(value.encode('utf-8')).hexdigest()


def proof_of_work(previous_proof):
    new_proof = 0
    while not is_valid_proof(previous_proof, new_proof):
        new_proof += 1
    return new_proof


def is_valid_proof(previous_proof, new_proof):
    value = f"{previous_proof}{new_proof}".encode('utf-8')
    hash_value = hashlib.sha256(value).hexdigest()
    return hash_value[:4] == "0000"


app = Flask(__name__)

blockchain = []
genesis_block = Block(0, "0", int(time.time()), "Genesis Block", calculate_hash(
    0, "0", int(time.time()), "Genesis Block", 0), 0)
blockchain.append(genesis_block)
previous_block = genesis_block


@app.route('/mine', methods=['GET'])
def mine():
    global previous_block
    previous_proof = previous_block.nonce
    proof = proof_of_work(previous_proof)
    previous_hash = previous_block.hash
    new_block = Block(len(blockchain), previous_hash, int(time.time()), "Block Data", calculate_hash(
        len(blockchain), previous_hash, int(time.time()), "Block Data", proof), proof)
    blockchain.append(new_block)
    previous_block = new_block
    response = {
        'message': 'New Block Mined',
        'index': new_block.index,
        'hash': new_block.hash,
        'proof': new_block.nonce,
        'previous_hash': new_block.previous_hash,
        'timestamp': new_block.timestamp,
        'data': new_block.data
    }
    return jsonify(response), 200


@app.route('/chain', methods=['GET'])
def get_chain():
    response = {
        'chain': [
            {
                'index': block.index,
                'hash': block.hash,
                'proof': block.nonce,
                'previous_hash': block.previous_hash,
                'timestamp': block.timestamp,
                'data': block.data
            }
            for block in blockchain
        ],
        'length': len(blockchain)
    }
    return jsonify(response), 200


if __name__ == '__main__':
    app.run(port=5000)
