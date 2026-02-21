// Block Execution Engine

class BlockExecutor {
    constructor() {
        this.blocks = [];
    }

    addBlock(block) {
        this.blocks.push(block);
    }

    execute() {
        for (const block of this.blocks) {
            console.log(`Executing block: ${block.name}`);
            block.run();
        }
    }
}

// Example block structure
class Block {
    constructor(name, runFunction) {
        this.name = name;
        this.run = runFunction;
    }
}

// Example usage
const executor = new BlockExecutor();

const block1 = new Block('Block 1', () => console.log('Running Block 1')); 
const block2 = new Block('Block 2', () => console.log('Running Block 2'));

executor.addBlock(block1);
executor.addBlock(block2);
executor.execute();

