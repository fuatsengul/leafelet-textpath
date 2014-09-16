Package.describe({
    summary: "leaflet-textpath is allow you to add texts on paths.",
    version: "1.0.0",
    git: "https://github.com/fuatsengul/leafelet-textpath"
    
});

Package.on_use(function(api){
    api.versionsFrom('METEOR@0.9.0.1');
    api.use([
    'mrt:leaflet@0.3.8', 'session@1.0.0', 'underscore@1.0.0'
    ], 'client');

    api.addFiles([
        'LICENSE',
        'lib/leaflet-textpath.js'
    ], 'client');
});
