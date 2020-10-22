const Helpers = use('Helpers');

module.exports = {
  upload: async function (photos) {
    let photosName = [];

    await photos.moveAll(Helpers.tmpPath('uploads'), (photo) => {
      const name = `${new Date().getTime()}${Math.floor(
        Math.random() * 1000 + 1
      )}.${photo.subtype}`;

      photosName[photosName.length] = name;

      return { name };
    });

    if (!photos.movedAll()) {
      const movedFiles = photos.movedList();
      photosName = [];

      await Promise.all(
        movedFiles.map((file) => {
          return removeFile(path.join(file._location, file.fileName));
        })
      );

      return profilePics.errors();
    }

    return photosName;
  },
};
