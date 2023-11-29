import fs from 'fs/promises';

export default defineEventHandler(async (event) => {
  // directory path for tools and technologies
  const directoryPath = new URL('../../public/images/tools-and-technologies', import.meta.url).pathname;

  try {
    // Read the files in the directory
    const files = await fs.readdir(directoryPath);

    // Filter files with .png extension
    const pngFiles = files.filter((file) => file.endsWith('.png'));

    // Create an array of objects
    const imageArray = pngFiles.map((file) => ({
      title: formatTitle(file),
      image: file,
    }));

    // Send the array as a JSON response
    return {
      tools: imageArray,
    };
  } catch (err) {
    console.error('Error reading directory:', err);
    throw createError({
      status: 500,
      message: 'Error reading directory',
    });
  }
});

// Helper function to format title (capitalize first letter)
const formatTitle = (filename: string) => {
  return filename.charAt(0).toUpperCase() + filename.slice(1, -4); // Remove ".png" extension
};
