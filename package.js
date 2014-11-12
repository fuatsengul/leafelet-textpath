Package.describe({
    summary: "leaflet-textpath is allow you to add texts on paths.",
    version: "1.1.0",
    git: "https://github.com/fuatsengul/leafelet-textpath"
    
});

Package.on_use(function(api){
    api.versionsFrom('1.0');
    api.use([
    'mrt:leaflet@0.3.8', 'session@1.0.0', 'underscore@1.0.0'
    ], 'client');

    api.addFiles([
        'LICENSE',
        'lib/leaflet-textpath.js'
    ], 'client');
});
