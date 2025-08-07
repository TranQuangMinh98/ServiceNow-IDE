import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "2660eb9a5e874c8d8f893d43fc7d544e"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "5f36ffb36bb043aca5ad803c3e1bd956"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "c04261c808124ab4b6bb7b4cdf55ce03"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "8d99a5a09db84d40bd137cfa32bfdb8f"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "b2d9f5e75c144e08adff919edbfea883",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "704c2b05333d418caac63247c7eae940",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "f98907464dd94452b50d0656bae560ce",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
