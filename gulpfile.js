const { task, dest, src, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');

task('sass', () => {
    return src([
        './src/Styles/SCSS/*.scss', 
        './src/Components/**/*.scss',
        './src/Pages/**/*.scss',
        './src/*.scss',
    ])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(prefix('last 4 versions'))
    .pipe(dest('./src/Styles/CSS'))
    
})

task('watch', () => {
    watch([
        './src/Styles/SCSS/*.scss', 
        './src/Components/**/*.scss',
        './src/Pages/**/*.scss',
        './src/*.scss',
        'src/Components/**/*.tsx', 
        './src/Pages/**/*.tsx',
        'src/App.tsx'
    ],
    series('sass')
    )
})