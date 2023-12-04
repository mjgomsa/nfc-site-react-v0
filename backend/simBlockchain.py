import hashlib
import time


class Block:
    def __init__(self, index, previous_hash, timestamp, data, hash):
        self.index = index
        self.previous_hash = previous_hash
        self.timestamp = timestamp
        self.data = data
        self.hash = hash


def calculate_hash(index, previous_hash, timestamp, data):
    value = str(index) + str(previous_hash) + str(timestamp) + str(data)
    return hashlib.sha256(value.encode('utf-8')).hexdigest()


def create_genesis_block():
    return Block(0, "0", int(time.time()), "Genesis Block", calculate_hash(0, "0", int(time.time()), "Genesis Block"))


def create_new_block(previous_block, data):
    index = previous_block.index + 1
    timestamp = int(time.time())
    hash_value = calculate_hash(index, previous_block.hash, timestamp, data)
    return Block(index, previous_block.hash, timestamp, data, hash_value)


# Example usage
blockchain = [create_genesis_block()]
previous_block = blockchain[0]

# Add blocks to the blockchain
num_blocks_to_add = 10
for i in range(1, num_blocks_to_add + 1):
    new_block_data = f"Block #{i} Data"
    new_block = create_new_block(previous_block, new_block_data)
    blockchain.append(new_block)
    previous_block = new_block

# Print the blockchain
for block in blockchain:
    print(f"Index: {block.index}")
    print(f"Previous Hash: {block.previous_hash}")
    print(f"Timestamp: {block.timestamp}")
    print(f"Data: {block.data}")
    print(f"Hash: {block.hash}")
    print("\n")
