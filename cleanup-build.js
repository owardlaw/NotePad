const fs = require("fs");
const path = require("path");

const buildFolder = path.join(__dirname, "build");

function deleteFile(file) {
  try {
    fs.unlinkSync(file);
    console.log(`Deleted ${file}`);
  } catch (error) {
    console.error(`Failed to delete ${file}: ${error.message}`);
  }
}

function deleteServiceWorkerAndPrecache() {
  const serviceWorkerFile = path.join(buildFolder, "service-worker.js");
  const precacheManifestFile = path.join(
    buildFolder,
    "precache-manifest.b5ca1c555e5f5d3e3cd3d3f39a81c5db.js"
  );

  deleteFile(serviceWorkerFile);
  deleteFile(precacheManifestFile);
}

deleteServiceWorkerAndPrecache();
