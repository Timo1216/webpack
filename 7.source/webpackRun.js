/**
 * @Author       : xiehan(timo)
 * @Date         : 2021-08-22 13:19:34
 * @LastEditors  : xiehan2747
 * @LastEditTime : 2021-08-22 13:36:52
 * @FilePath     : /webpack/7.source/webpackRun.js
 */
const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config');

// 生成编译对象
const compiler = webpack(webpackConfig);

// 执行编译
compiler.run((err, stats) => {
    console.log('log 111 err => ', err);
    console.log('log 111 stats => ', stats);
});
/**
 * stats: {
    compilation: Compilation {
        _pluginCompat: SyncBailHook {
        _args: [Array],
        taps: [Array],
        interceptors: [],
        call: [Function: lazyCompileHook],
        promise: [Function: lazyCompileHook],
        callAsync: [Function: lazyCompileHook],
        _x: undefined
        },
        hooks: {
        buildModule: [SyncHook],
        rebuildModule: [SyncHook],
        failedModule: [SyncHook],
        succeedModule: [SyncHook],
        addEntry: [SyncHook],
        failedEntry: [SyncHook],
        succeedEntry: [SyncHook],
        dependencyReference: [SyncWaterfallHook],
        finishModules: [AsyncSeriesHook],
        finishRebuildingModule: [SyncHook],
        unseal: [SyncHook],
        seal: [SyncHook],
        beforeChunks: [SyncHook],
        afterChunks: [SyncHook],
        optimizeDependenciesBasic: [SyncBailHook],
        optimizeDependencies: [SyncBailHook],
        optimizeDependenciesAdvanced: [SyncBailHook],
        afterOptimizeDependencies: [SyncHook],
        optimize: [SyncHook],
        optimizeModulesBasic: [SyncBailHook],
        optimizeModules: [SyncBailHook],
        optimizeModulesAdvanced: [SyncBailHook],
        afterOptimizeModules: [SyncHook],
        optimizeChunksBasic: [SyncBailHook],
        optimizeChunks: [SyncBailHook],
        optimizeChunksAdvanced: [SyncBailHook],
        afterOptimizeChunks: [SyncHook],
        optimizeTree: [AsyncSeriesHook],
        afterOptimizeTree: [SyncHook],
        optimizeChunkModulesBasic: [SyncBailHook],
        optimizeChunkModules: [SyncBailHook],
        optimizeChunkModulesAdvanced: [SyncBailHook],
        afterOptimizeChunkModules: [SyncHook],
        shouldRecord: [SyncBailHook],
        reviveModules: [SyncHook],
        optimizeModuleOrder: [SyncHook],
        advancedOptimizeModuleOrder: [SyncHook],
        beforeModuleIds: [SyncHook],
        moduleIds: [SyncHook],
        optimizeModuleIds: [SyncHook],
        afterOptimizeModuleIds: [SyncHook],
        reviveChunks: [SyncHook],
        optimizeChunkOrder: [SyncHook],
        beforeChunkIds: [SyncHook],
        optimizeChunkIds: [SyncHook],
        afterOptimizeChunkIds: [SyncHook],
        recordModules: [SyncHook],
        recordChunks: [SyncHook],
        beforeHash: [SyncHook],
        contentHash: [SyncHook],
        afterHash: [SyncHook],
        recordHash: [SyncHook],
        record: [SyncHook],
        beforeModuleAssets: [SyncHook],
        shouldGenerateChunkAssets: [SyncBailHook],
        beforeChunkAssets: [SyncHook],
        additionalChunkAssets: [SyncHook],
        additionalAssets: [AsyncSeriesHook],
        optimizeChunkAssets: [AsyncSeriesHook],
        afterOptimizeChunkAssets: [SyncHook],
        optimizeAssets: [AsyncSeriesHook],
        afterOptimizeAssets: [SyncHook],
        needAdditionalSeal: [SyncBailHook],
        afterSeal: [AsyncSeriesHook],
        chunkHash: [SyncHook],
        moduleAsset: [SyncHook],
        chunkAsset: [SyncHook],
        assetPath: [SyncWaterfallHook],
        needAdditionalPass: [SyncBailHook],
        childCompiler: [SyncHook],
        log: [SyncBailHook],
        normalModuleLoader: [SyncHook],
        optimizeExtractedChunksBasic: [SyncBailHook],
        optimizeExtractedChunks: [SyncBailHook],
        optimizeExtractedChunksAdvanced: [SyncBailHook],
        afterOptimizeExtractedChunks: [SyncHook]
        },
        name: undefined,
        compiler: Compiler {
        _pluginCompat: [SyncBailHook],
        hooks: [Object],
        name: undefined,
        parentCompilation: undefined,
        outputPath: '/Users/timo/timo/learn/webpack/7.source/dist',
        outputFileSystem: [NodeOutputFileSystem],
        inputFileSystem: [CachedInputFileSystem],
        recordsInputPath: undefined,
        recordsOutputPath: undefined,
        records: [Object],
        removedFiles: Set {},
        fileTimestamps: Map {},
        contextTimestamps: Map {},
        resolverFactory: [ResolverFactory],
        infrastructureLogger: [Function: logger],
        resolvers: [Object],
        options: [Object],
        context: '/Users/timo/timo/learn/webpack',
        requestShortener: [RequestShortener],
        running: false,
        watchMode: false,
        _assetEmittingSourceCache: [WeakMap],
        _assetEmittingWrittenFiles: Map {},
        watchFileSystem: [NodeWatchFileSystem],
        dependencies: undefined,
        _lastCompilationFileDependencies: [SortableSet [Set]],
        _lastCompilationContextDependencies: [SortableSet [Set]]
        },
        resolverFactory: ResolverFactory {
        _pluginCompat: [SyncBailHook],
        hooks: [Object],
        cache2: [Map]
        },
        inputFileSystem: CachedInputFileSystem {
        fileSystem: NodeJsInputFileSystem {},
        _statStorage: [Storage],
        _readdirStorage: [Storage],
        _readFileStorage: [Storage],
        _readJsonStorage: [Storage],
        _readlinkStorage: [Storage],
        _stat: [Function: bound bound ],
        _statSync: [Function: bound bound ],
        _readdir: [Function: bound readdir],
        _readdirSync: [Function: bound readdirSync],
        _readFile: [Function: bound bound readFile],
        _readFileSync: [Function: bound bound readFileSync],
        _readJson: [Function],
        _readJsonSync: [Function],
        _readlink: [Function: bound bound readlink],
        _readlinkSync: [Function: bound bound readlinkSync]
        },
        requestShortener: RequestShortener {
        currentDirectoryRegExp: /(^|!)\/Users\/timo\/timo\/learn\/webpack/g,
        parentDirectoryRegExp: /(^|!)\/Users\/timo\/timo\/learn/g,
        buildinsAsModule: true,
        buildinsRegExp: /(^|!)\/Users\/timo\/timo\/learn\/webpack\/7\.source\/node_modules\/webpack/g,
        cache: Map {}
        },
        options: {
        mode: 'development',
        entry: './src/index.js',
        devtool: 'none',
        output: [Object],
        cache: true,
        context: '/Users/timo/timo/learn/webpack',
        target: 'web',
        module: [Object],
        node: [Object],
        performance: false,
        optimization: [Object],
        resolve: [Object],
        resolveLoader: [Object],
        infrastructureLogging: [Object]
        },
        outputOptions: {
        path: '/Users/timo/timo/learn/webpack/7.source/dist',
        filename: 'bundle.js',
        publicPath: '/',
        chunkFilename: '[id].bundle.js',
        webassemblyModuleFilename: '[modulehash].module.wasm',
        library: '',
        hotUpdateFunction: 'webpackHotUpdate',
        jsonpFunction: 'webpackJsonp',
        chunkCallbackName: 'webpackChunk',
        globalObject: 'window',
        devtoolNamespace: '',
        libraryTarget: 'var',
        pathinfo: true,
        sourceMapFilename: '[file].map[query]',
        hotUpdateChunkFilename: '[id].[hash].hot-update.js',
        hotUpdateMainFilename: '[hash].hot-update.json',
        crossOriginLoading: false,
        jsonpScriptType: false,
        chunkLoadTimeout: 120000,
        hashFunction: 'md4',
        hashDigest: 'hex',
        hashDigestLength: 20,
        devtoolLineToLine: false,
        strictModuleExceptionHandling: false
        },
        bail: undefined,
        profile: undefined,
        performance: false,
        mainTemplate: MainTemplate {
        _pluginCompat: [SyncBailHook],
        outputOptions: [Object],
        hooks: [Object],
        requireFn: '__webpack_require__'
        },
        chunkTemplate: ChunkTemplate {
        _pluginCompat: [SyncBailHook],
        outputOptions: [Object],
        hooks: [Object]
        },
        hotUpdateChunkTemplate: HotUpdateChunkTemplate {
        _pluginCompat: [SyncBailHook],
        outputOptions: [Object],
        hooks: [Object]
        },
        runtimeTemplate: RuntimeTemplate {
        outputOptions: [Object],
        requestShortener: [RequestShortener]
        },
        moduleTemplates: { javascript: [ModuleTemplate], webassembly: [ModuleTemplate] },
        semaphore: Semaphore {
        available: 100,
        waiters: [],
        _continue: [Function: bound _continue]
        },
        entries: [],
        _preparedEntrypoints: [],
        entrypoints: Map {},
        chunks: [],
        chunkGroups: [],
        namedChunkGroups: Map {},
        namedChunks: Map {},
        modules: [],
        _modules: Map {},
        cache: {},
        records: { modules: [Object], chunks: [Object] },
        additionalChunkAssets: [],
        assets: {},
        errors: [
        EntryModuleNotFoundError: Entry module not found: Error: Can't resolve './src/index.js' in '/Users/timo/timo/learn/webpack'
            at /Users/timo/timo/learn/webpack/7.source/node_modules/webpack/lib/Compilation.js:1038:31
            at /Users/timo/timo/learn/webpack/7.source/node_modules/webpack/lib/NormalModuleFactory.js:401:22
            at /Users/timo/timo/learn/webpack/7.source/node_modules/webpack/lib/NormalModuleFactory.js:130:21
            at /Users/timo/timo/learn/webpack/7.source/node_modules/webpack/lib/NormalModuleFactory.js:224:22
            at /Users/timo/timo/learn/webpack/7.source/node_modules/neo-async/async.js:2830:7
            at /Users/timo/timo/learn/webpack/7.source/node_modules/neo-async/async.js:6877:13
            at /Users/timo/timo/learn/webpack/7.source/node_modules/webpack/lib/NormalModuleFactory.js:214:25
            at /Users/timo/timo/learn/webpack/7.source/node_modules/webpack/node_modules/enhanced-resolve/lib/Resolver.js:213:14
            at /Users/timo/timo/learn/webpack/7.source/node_modules/webpack/node_modules/enhanced-resolve/lib/Resolver.js:285:5
            at eval (eval at create (/Users/timo/timo/learn/webpack/7.source/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:13:1)
        resolve './src/index.js' in '/Users/timo/timo/learn/webpack'
            using description file: /Users/timo/timo/learn/package.json (relative path: ./webpack)
            Field 'browser' doesn't contain a valid alias configuration
            using description file: /Users/timo/timo/learn/package.json (relative path: ./webpack/src/index.js)
                no extension
                Field 'browser' doesn't contain a valid alias configuration
                /Users/timo/timo/learn/webpack/src/index.js doesn't exist
                .wasm
                Field 'browser' doesn't contain a valid alias configuration
                /Users/timo/timo/learn/webpack/src/index.js.wasm doesn't exist
                .mjs
                Field 'browser' doesn't contain a valid alias configuration
                /Users/timo/timo/learn/webpack/src/index.js.mjs doesn't exist
                .js
                Field 'browser' doesn't contain a valid alias configuration
                /Users/timo/timo/learn/webpack/src/index.js.js doesn't exist
                .json
                Field 'browser' doesn't contain a valid alias configuration
                /Users/timo/timo/learn/webpack/src/index.js.json doesn't exist
                as directory
                /Users/timo/timo/learn/webpack/src/index.js doesn't exist
        ],
        warnings: [],
        children: [],
        logging: Map { 'webpack.buildChunkGraph.visitModules' => [Array] },
        dependencyFactories: Map {
        [class WebAssemblyImportDependency extends ModuleDependency] => [NormalModuleFactory],
        [class WebAssemblyExportImportedDependency extends ModuleDependency] => [NormalModuleFactory],
        [class SingleEntryDependency extends ModuleDependency] => [NormalModuleFactory],
        [Function] => NullFactory {},
        [Function] => NullFactory {},
        [Function] => NullFactory {},
        [Function] => [NormalModuleFactory],
        [Function] => [NormalModuleFactory],
        [Function] => NullFactory {},
        [Function] => NullFactory {},
        [Function] => NullFactory {},
        [Function] => [NormalModuleFactory],
        [Function] => NullFactory {},
        [Function] => [NormalModuleFactory],
        [Function] => NullFactory {},
        [Function] => [NormalModuleFactory],
        [Function] => NullFactory {},
        [Function] => [ContextModuleFactory],
        [Function] => NullFactory {},
        [Function] => NullFactory {},
        [Function] => NullFactory {},
        [Function] => [NormalModuleFactory],
        [Function] => [ContextModuleFactory],
        [Function] => [NormalModuleFactory],
        [Function] => [ContextModuleFactory],
        [Function] => NullFactory {},
        [Function] => NullFactory {},
        [class LoaderDependency extends ModuleDependency] => [NormalModuleFactory],
        [Function] => [NormalModuleFactory],
        [Function] => [NormalModuleFactory],
        [Function] => NullFactory {},
        [Function] => [ContextModuleFactory],
        [class ContextElementDependency extends ModuleDependency] => [NormalModuleFactory],
        [Function] => [NormalModuleFactory],
        [Function] => [NormalModuleFactory],
        [Function] => [NormalModuleFactory],
        [Function] => [ContextModuleFactory]
        },
        dependencyTemplates: Map {
        'hash' => '',
        [Function] => ConstDependencyTemplate {},
        [Function] => HarmonyExportDependencyTemplate {},
        [Function] => HarmonyInitDependencyTemplate {},
        [Function] => HarmonyImportSideEffectDependencyTemplate {},
        [Function] => HarmonyImportSpecifierDependencyTemplate {},
        [Function] => HarmonyExportDependencyTemplate {},
        [Function] => HarmonyExportDependencyTemplate {},
        [Function] => HarmonyExportSpecifierDependencyTemplate {},
        [Function] => HarmonyExportImportedSpecifierDependencyTemplate {},
        [Function] => HarmonyAcceptDependencyTemplate {},
        [Function] => HarmonyAcceptImportDependencyTemplate {},
        [Function] => AMDRequireDependencyTemplate {},
        [Function] => ModuleDependencyTemplateAsRequireId {},
        [Function] => AMDRequireArrayDependencyTemplate {},
        [Function] => ContextDependencyTemplateAsRequireCall {},
        [Function] => AMDDefineDependencyTemplate {},
        [Function] => UnsupportedDependencyTemplate {},
        [Function] => LocalModuleDependencyTemplate {},
        [Function] => ModuleDependencyTemplateAsId {},
        [Function] => ContextDependencyTemplateAsRequireCall {},
        [Function] => ModuleDependencyTemplateAsId {},
        [Function] => ContextDependencyTemplateAsId {},
        [Function] => RequireResolveHeaderDependencyTemplate {},
        [Function] => RequireHeaderDependencyTemplate {},
        [Function] => RequireIncludeDependencyTemplate {},
        [Function] => NullDependencyTemplate {},
        [Function] => RequireEnsureDependencyTemplate {},
        [Function] => ModuleDependencyTemplateAsRequireId {},
        [Function] => ImportDependencyTemplate {},
        [Function] => ImportEagerDependencyTemplate {},
        [Function] => ImportDependencyTemplate {},
        [Function] => ContextDependencyTemplateAsRequireCall {}
        },
        childrenCounters: {},
        usedChunkIds: null,
        usedModuleIds: null,
        fileTimestamps: Map {},
        contextTimestamps: Map {},
        compilationDependencies: Set {},
        _buildingModules: Map {},
        _rebuildingModules: Map {},
        emittedAssets: Set {},
        fullHash: 'd9a367ac9af75dd0ddda4a15ea4f6b29',
        hash: 'd9a367ac9af75dd0ddda',
        fileDependencies: SortableSet [Set] {
        _sortFn: undefined,
        _lastActiveSortFn: null,
        _cache: undefined,
        _cacheOrderIndependent: undefined
        },
        contextDependencies: SortableSet [Set] {
        _sortFn: undefined,
        _lastActiveSortFn: null,
        _cache: undefined,
        _cacheOrderIndependent: undefined
        },
        missingDependencies: SortableSet [Set] {
        _sortFn: undefined,
        _lastActiveSortFn: null,
        _cache: undefined,
        _cacheOrderIndependent: undefined
        }
    },
    hash: 'd9a367ac9af75dd0ddda',
    startTime: 1629609717749,
    endTime: 1629609717779
    }
 */
