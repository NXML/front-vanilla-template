export default {
    root:"src",
    // Indicate that the project is omminting charset
    css: { preprocessorOptions: { scss: { charset: false } } },

    build: {
        outDir: '../dist'
      }
 
}