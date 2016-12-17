module.exports = function(grunt) {

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        //typescript compilation options
        ts: {
            build: {
                src: ['./app/**/*.ts'],
                options: {
                    target: 'es5',
                    module: 'system',
                    moduleResolution: 'node',
                    sourceMap: false,
                    emitDecoratorMetadata: false,
                    experimentalDecorators: true,
                    lib: ['es2015', 'dom'],
                    noImplicitAny: true,
                    suppressImplicitAnyIndexErrors: true,
                    forceConsistentCasingInFileNames: true,
                    pretty: true,
                    fast: 'never'
                }
            }
        },
        //sass compilation options
        sass: {
            build: {
                files: {
                    './dist/styles.css': './app/globals/assets/scss/main.scss'
                },
                options: {
                    sourceMap: false
                }
            },
            watch: {
                files: {
                    './app/globals/assets/styles.css': './app/globals/assets/scss/main.scss'
                },
                options: {
                    sourceMap: true
                }
            }

        },
        //string replace options for build
        'string-replace': {
            build: {
                files: {
                    'dist/': './index.html'
                },
                options: {
                    replacements: [
                        {
                            pattern: '<script src="./systemjs.config.js"></script>',
                            replacement: ''
                        },
                        {
                            pattern: '<script> System.import(\'app\').catch(function(err){ console.error(err); }); </script>',
                            replacement: ''
                        },
                        {
                            pattern: '<script src="./node_modules/systemjs/dist/system.src.js"></script>',
                            replacement: '<script src="./bundle.js"></script>'
                        },
                        {
                            pattern: '<link rel="stylesheet" href="./app/globals/assets/styles.css">',
                            replacement: '<link rel="stylesheet" href="styles.css">'
                        }
                    ]
                }
            }
        },
        //Bundle files via systemjs-builder
        systemjs: {
            build: {
                options: {
                    sfx: true,
                    baseURL: "./",
                    configFile: "./systemjs.config.js",
                    minify: true,
                    sourceMaps: false,
                    build: {
                        mangle: false
                    }
                },
                files: [{
                    "src":  "./app/main/bootstrap.js",
                    "dest": "./dist/bundle.js"
                }]
            }
        },
        //copy files -> meant for templates in build
        copy: {
            build: {
                expand: true,
                src: ['./app/**/*.html','./node_modules/core-js/client/shim.min.js',
                    './node_modules/zone.js/dist/zone.js', './node_modules/reflect-metadata/Reflect.js',
                    './node_modules/systemjs/dist/system.src.js'],
                dest: 'dist'
            }
        },
        //watch task for local development
        watch: {
            sass: {
                files: 'app/**/*.scss',
                tasks: ['sass:watch']
            },
            html: {
                files: 'app/**/*.html'
            },
            options: {
                livereload: true,
                spawn: false
            }
        },
        //simple http server for serving angular file in local development
        connect: {
            localDev: {
                options: {
                    port: 9000,
                    base: './'
                }
            },
            builtSite: {
                options: {
                    port: 7000,
                    base: './dist/'
                }
            }
        }
    });

    grunt.registerTask('build', ['ts:build', 'sass:build', 'string-replace:build', 'systemjs:build', 'copy:build']);
    grunt.registerTask('devWatch', ['sass:watch', 'connect:localDev', 'watch']);
};