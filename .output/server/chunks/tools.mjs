globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { d as defineEventHandler, c as createError } from './nitro/node-server.mjs';
import fs from 'fs/promises';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';

const tools = defineEventHandler(async (event) => {
  const directoryPath = new URL("../../public/images/tools-and-technologies", globalThis._importMeta_.url).pathname;
  try {
    const files = await fs.readdir(directoryPath);
    const pngFiles = files.filter((file) => file.endsWith(".png"));
    const tools = pngFiles.map((file) => ({
      title: formatTitle(file),
      image: file
    }));
    return tools;
  } catch (err) {
    console.error("Error reading directory:", err);
    throw createError({
      status: 500,
      message: "Error reading directory"
    });
  }
});
const formatTitle = (filename) => {
  return filename.charAt(0).toUpperCase() + filename.slice(1, -4);
};

export { tools as default };
//# sourceMappingURL=tools.mjs.map
