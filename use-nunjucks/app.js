const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    var
        autoescape = opts.autoescape && true,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('views', {
    watch: true,
    filters: {
        hex: function(n) {
            return '0x' + n.toString(16);
        }
    }
});

// var s = env.render('hello.html', { name: '小明' });
// console.log(s);

// var s = env.render('hello.html', { name: '<script>alert("小明")</script>' });
// console.log(s);

var s = env.render('hello.html', { name: '<script>alert("小明")</script>', fruits: ['apple', 'banana', 'orange'] });
console.log(s);

var ex = env.render('extend.html', { header: 'Hello', body: 'This is extend.html body from base.html' });
console.log(ex);