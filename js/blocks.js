// Block management system

class Block {
    constructor(id, properties) {
        this.id = id;
        this.properties = properties;
    }

    updateProperties(newProperties) {
        this.properties = { ...this.properties, ...newProperties };
    }

    render() {
        // Logic to render block
        console.log(`Rendering block ${this.id} with properties:`, this.properties);
    }
}

class BlockManager {
    constructor() {
        this.blocks = {};
    }

    createBlock(id, properties) {
        const newBlock = new Block(id, properties);
        this.blocks[id] = newBlock;
        return newBlock;
    }

    getBlock(id) {
        return this.blocks[id];
    }

    updateBlock(id, newProperties) {
        const block = this.getBlock(id);
        if (block) {
            block.updateProperties(newProperties);
        }
    }

    renderAllBlocks() {
        Object.values(this.blocks).forEach(block => block.render());
    }
}

// Example usage:
const blockManager = new BlockManager();
const blockA = blockManager.createBlock('blockA', { color: 'red', size: 'large' });
blockManager.renderAllBlocks();
blockManager.updateBlock('blockA', { size: 'small' });
blockManager.renderAllBlocks();
