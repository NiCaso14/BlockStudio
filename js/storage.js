class ProjectStorage {
    constructor() {
        this.storage = {};
    }

    loadBspFile(fileName) {
        // Logic to load .bsp file
        console.log(`Loading ${fileName}...`);
    }

    saveBspFile(fileName, data) {
        // Logic to save .bsp file
        this.storage[fileName] = data;
        console.log(`Saving ${fileName}...`);
    }

    deleteBspFile(fileName) {
        // Logic to delete .bsp file
        delete this.storage[fileName];
        console.log(`Deleting ${fileName}...`);
    }

    listBspFiles() {
        // Logic to list all .bsp files
        return Object.keys(this.storage);
    }
}