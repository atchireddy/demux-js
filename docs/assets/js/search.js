var typedoc = typedoc || {};
            typedoc.search = typedoc.search || {};
            typedoc.search.data = {"kinds":{"32":"Variable","128":"Class","256":"Interface","512":"Constructor","1024":"Property","2048":"Method","65536":"Type literal","2097152":"Object literal"},"rows":[{"id":0,"kind":256,"name":"Block","url":"interfaces/block.html","classes":"tsd-kind-interface"},{"id":1,"kind":1024,"name":"actions","url":"interfaces/block.html#actions","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Block"},{"id":2,"kind":1024,"name":"blockHash","url":"interfaces/block.html#blockhash","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Block"},{"id":3,"kind":1024,"name":"blockNumber","url":"interfaces/block.html#blocknumber","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Block"},{"id":4,"kind":1024,"name":"previousBlockHash","url":"interfaces/block.html#previousblockhash","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Block"},{"id":5,"kind":256,"name":"IndexState","url":"interfaces/indexstate.html","classes":"tsd-kind-interface"},{"id":6,"kind":1024,"name":"blockNumber","url":"interfaces/indexstate.html#blocknumber","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"IndexState"},{"id":7,"kind":1024,"name":"blockHash","url":"interfaces/indexstate.html#blockhash","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"IndexState"},{"id":8,"kind":256,"name":"BlockInfo","url":"interfaces/blockinfo.html","classes":"tsd-kind-interface"},{"id":9,"kind":1024,"name":"blockHash","url":"interfaces/blockinfo.html#blockhash","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"BlockInfo"},{"id":10,"kind":1024,"name":"blockNumber","url":"interfaces/blockinfo.html#blocknumber","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"BlockInfo"},{"id":11,"kind":1024,"name":"previousBlockHash","url":"interfaces/blockinfo.html#previousblockhash","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"BlockInfo"},{"id":12,"kind":256,"name":"Action","url":"interfaces/action.html","classes":"tsd-kind-interface"},{"id":13,"kind":1024,"name":"type","url":"interfaces/action.html#type","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Action"},{"id":14,"kind":1024,"name":"payload","url":"interfaces/action.html#payload","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Action"},{"id":15,"kind":256,"name":"Updater","url":"interfaces/updater.html","classes":"tsd-kind-interface"},{"id":16,"kind":1024,"name":"actionType","url":"interfaces/updater.html#actiontype","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Updater"},{"id":17,"kind":1024,"name":"updater","url":"interfaces/updater.html#updater-1","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Updater"},{"id":18,"kind":65536,"name":"__type","url":"interfaces/updater.html#updater-1.__type","classes":"tsd-kind-type-literal tsd-parent-kind-property tsd-is-not-exported","parent":"Updater.updater"},{"id":19,"kind":256,"name":"Effect","url":"interfaces/effect.html","classes":"tsd-kind-interface"},{"id":20,"kind":1024,"name":"actionType","url":"interfaces/effect.html#actiontype","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Effect"},{"id":21,"kind":1024,"name":"effect","url":"interfaces/effect.html#effect-1","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"Effect"},{"id":22,"kind":65536,"name":"__type","url":"interfaces/effect.html#effect-1.__type","classes":"tsd-kind-type-literal tsd-parent-kind-property tsd-is-not-exported","parent":"Effect.effect"},{"id":23,"kind":2097152,"name":"handlers","url":"index.html#handlers","classes":"tsd-kind-object-literal"},{"id":24,"kind":2097152,"name":"readers","url":"index.html#readers","classes":"tsd-kind-object-literal"},{"id":25,"kind":2097152,"name":"watchers","url":"index.html#watchers","classes":"tsd-kind-object-literal"},{"id":26,"kind":128,"name":"AbstractActionHandler","url":"classes/abstractactionhandler.html","classes":"tsd-kind-class"},{"id":27,"kind":1024,"name":"lastProcessedBlockNumber","url":"classes/abstractactionhandler.html#lastprocessedblocknumber","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"AbstractActionHandler"},{"id":28,"kind":1024,"name":"lastProcessedBlockHash","url":"classes/abstractactionhandler.html#lastprocessedblockhash","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"AbstractActionHandler"},{"id":29,"kind":512,"name":"constructor","url":"classes/abstractactionhandler.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class","parent":"AbstractActionHandler"},{"id":30,"kind":1024,"name":"updaters","url":"classes/abstractactionhandler.html#updaters","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"AbstractActionHandler"},{"id":31,"kind":1024,"name":"effects","url":"classes/abstractactionhandler.html#effects","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"AbstractActionHandler"},{"id":32,"kind":2048,"name":"handleBlock","url":"classes/abstractactionhandler.html#handleblock","classes":"tsd-kind-method tsd-parent-kind-class","parent":"AbstractActionHandler"},{"id":33,"kind":2048,"name":"updateIndexState","url":"classes/abstractactionhandler.html#updateindexstate","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-protected","parent":"AbstractActionHandler"},{"id":34,"kind":2048,"name":"loadIndexState","url":"classes/abstractactionhandler.html#loadindexstate","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-protected","parent":"AbstractActionHandler"},{"id":35,"kind":2048,"name":"handleWithState","url":"classes/abstractactionhandler.html#handlewithstate","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-protected","parent":"AbstractActionHandler"},{"id":36,"kind":2048,"name":"runUpdaters","url":"classes/abstractactionhandler.html#runupdaters","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-protected","parent":"AbstractActionHandler"},{"id":37,"kind":2048,"name":"runEffects","url":"classes/abstractactionhandler.html#runeffects","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-protected","parent":"AbstractActionHandler"},{"id":38,"kind":2048,"name":"rollbackTo","url":"classes/abstractactionhandler.html#rollbackto","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-protected","parent":"AbstractActionHandler"},{"id":39,"kind":2048,"name":"handleActions","url":"classes/abstractactionhandler.html#handleactions","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-protected","parent":"AbstractActionHandler"},{"id":40,"kind":128,"name":"MassiveActionHandler","url":"classes/massiveactionhandler.html","classes":"tsd-kind-class"},{"id":41,"kind":512,"name":"constructor","url":"classes/massiveactionhandler.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class tsd-is-overwrite","parent":"MassiveActionHandler"},{"id":42,"kind":1024,"name":"updaters","url":"classes/massiveactionhandler.html#updaters","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-overwrite tsd-is-protected","parent":"MassiveActionHandler"},{"id":43,"kind":1024,"name":"effects","url":"classes/massiveactionhandler.html#effects","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-overwrite tsd-is-protected","parent":"MassiveActionHandler"},{"id":44,"kind":1024,"name":"massiveInstance","url":"classes/massiveactionhandler.html#massiveinstance","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"MassiveActionHandler"},{"id":45,"kind":2048,"name":"handleWithState","url":"classes/massiveactionhandler.html#handlewithstate","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-overwrite tsd-is-protected","parent":"MassiveActionHandler"},{"id":46,"kind":2048,"name":"updateIndexState","url":"classes/massiveactionhandler.html#updateindexstate","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-overwrite tsd-is-protected","parent":"MassiveActionHandler"},{"id":47,"kind":2048,"name":"loadIndexState","url":"classes/massiveactionhandler.html#loadindexstate","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-overwrite tsd-is-protected","parent":"MassiveActionHandler"},{"id":48,"kind":2048,"name":"rollbackTo","url":"classes/massiveactionhandler.html#rollbackto","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-overwrite tsd-is-protected","parent":"MassiveActionHandler"},{"id":49,"kind":1024,"name":"lastProcessedBlockNumber","url":"classes/massiveactionhandler.html#lastprocessedblocknumber","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited tsd-is-protected","parent":"MassiveActionHandler"},{"id":50,"kind":1024,"name":"lastProcessedBlockHash","url":"classes/massiveactionhandler.html#lastprocessedblockhash","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited tsd-is-protected","parent":"MassiveActionHandler"},{"id":51,"kind":2048,"name":"handleBlock","url":"classes/massiveactionhandler.html#handleblock","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"MassiveActionHandler"},{"id":52,"kind":2048,"name":"runUpdaters","url":"classes/massiveactionhandler.html#runupdaters","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited tsd-is-protected","parent":"MassiveActionHandler"},{"id":53,"kind":2048,"name":"runEffects","url":"classes/massiveactionhandler.html#runeffects","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited tsd-is-protected","parent":"MassiveActionHandler"},{"id":54,"kind":2048,"name":"handleActions","url":"classes/massiveactionhandler.html#handleactions","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited tsd-is-protected","parent":"MassiveActionHandler"},{"id":55,"kind":2097152,"name":"postgres","url":"index.html#postgres","classes":"tsd-kind-object-literal"},{"id":56,"kind":32,"name":"MassiveActionHandler","url":"index.html#postgres.massiveactionhandler","classes":"tsd-kind-variable tsd-parent-kind-object-literal","parent":"postgres"},{"id":57,"kind":32,"name":"AbstractActionHandler","url":"index.html#handlers.abstractactionhandler","classes":"tsd-kind-variable tsd-parent-kind-object-literal","parent":"handlers"},{"id":58,"kind":32,"name":"postgres","url":"index.html#handlers.postgres","classes":"tsd-kind-variable tsd-parent-kind-object-literal","parent":"handlers"},{"id":59,"kind":65536,"name":"__type","url":"index.html#handlers.postgres.__type","classes":"tsd-kind-type-literal tsd-parent-kind-variable tsd-is-not-exported","parent":"handlers.postgres"},{"id":60,"kind":128,"name":"AbstractActionReader","url":"classes/abstractactionreader.html","classes":"tsd-kind-class"},{"id":61,"kind":1024,"name":"headBlockNumber","url":"classes/abstractactionreader.html#headblocknumber","classes":"tsd-kind-property tsd-parent-kind-class","parent":"AbstractActionReader"},{"id":62,"kind":1024,"name":"currentBlockNumber","url":"classes/abstractactionreader.html#currentblocknumber","classes":"tsd-kind-property tsd-parent-kind-class","parent":"AbstractActionReader"},{"id":63,"kind":1024,"name":"isFirstBlock","url":"classes/abstractactionreader.html#isfirstblock","classes":"tsd-kind-property tsd-parent-kind-class","parent":"AbstractActionReader"},{"id":64,"kind":1024,"name":"currentBlockData","url":"classes/abstractactionreader.html#currentblockdata","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"AbstractActionReader"},{"id":65,"kind":1024,"name":"blockHistory","url":"classes/abstractactionreader.html#blockhistory","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"AbstractActionReader"},{"id":66,"kind":512,"name":"constructor","url":"classes/abstractactionreader.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class","parent":"AbstractActionReader"},{"id":67,"kind":1024,"name":"startAtBlock","url":"classes/abstractactionreader.html#startatblock","classes":"tsd-kind-property tsd-parent-kind-class","parent":"AbstractActionReader"},{"id":68,"kind":1024,"name":"onlyIrreversible","url":"classes/abstractactionreader.html#onlyirreversible","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"AbstractActionReader"},{"id":69,"kind":1024,"name":"maxHistoryLength","url":"classes/abstractactionreader.html#maxhistorylength","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"AbstractActionReader"},{"id":70,"kind":2048,"name":"getHeadBlockNumber","url":"classes/abstractactionreader.html#getheadblocknumber","classes":"tsd-kind-method tsd-parent-kind-class","parent":"AbstractActionReader"},{"id":71,"kind":2048,"name":"getBlock","url":"classes/abstractactionreader.html#getblock","classes":"tsd-kind-method tsd-parent-kind-class","parent":"AbstractActionReader"},{"id":72,"kind":2048,"name":"nextBlock","url":"classes/abstractactionreader.html#nextblock","classes":"tsd-kind-method tsd-parent-kind-class","parent":"AbstractActionReader"},{"id":73,"kind":2048,"name":"rollback","url":"classes/abstractactionreader.html#rollback","classes":"tsd-kind-method tsd-parent-kind-class","parent":"AbstractActionReader"},{"id":74,"kind":2048,"name":"rollbackExhausted","url":"classes/abstractactionreader.html#rollbackexhausted","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-protected","parent":"AbstractActionReader"},{"id":75,"kind":2048,"name":"seekToBlock","url":"classes/abstractactionreader.html#seektoblock","classes":"tsd-kind-method tsd-parent-kind-class","parent":"AbstractActionReader"},{"id":76,"kind":256,"name":"EosAuthorization","url":"interfaces/eosauthorization.html","classes":"tsd-kind-interface"},{"id":77,"kind":1024,"name":"actor","url":"interfaces/eosauthorization.html#actor","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"EosAuthorization"},{"id":78,"kind":1024,"name":"permission","url":"interfaces/eosauthorization.html#permission","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"EosAuthorization"},{"id":79,"kind":256,"name":"EosPayload","url":"interfaces/eospayload.html","classes":"tsd-kind-interface"},{"id":80,"kind":1024,"name":"account","url":"interfaces/eospayload.html#account","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"EosPayload"},{"id":81,"kind":1024,"name":"actionIndex","url":"interfaces/eospayload.html#actionindex","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"EosPayload"},{"id":82,"kind":1024,"name":"authorization","url":"interfaces/eospayload.html#authorization","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"EosPayload"},{"id":83,"kind":1024,"name":"data","url":"interfaces/eospayload.html#data","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"EosPayload"},{"id":84,"kind":1024,"name":"name","url":"interfaces/eospayload.html#name","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"EosPayload"},{"id":85,"kind":1024,"name":"transactionId","url":"interfaces/eospayload.html#transactionid","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"EosPayload"},{"id":86,"kind":256,"name":"EosAction","url":"interfaces/eosaction.html","classes":"tsd-kind-interface"},{"id":87,"kind":1024,"name":"payload","url":"interfaces/eosaction.html#payload","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-overwrite","parent":"EosAction"},{"id":88,"kind":1024,"name":"type","url":"interfaces/eosaction.html#type","classes":"tsd-kind-property tsd-parent-kind-interface tsd-is-inherited","parent":"EosAction"},{"id":89,"kind":128,"name":"NodeosBlock","url":"classes/nodeosblock.html","classes":"tsd-kind-class"},{"id":90,"kind":1024,"name":"actions","url":"classes/nodeosblock.html#actions","classes":"tsd-kind-property tsd-parent-kind-class","parent":"NodeosBlock"},{"id":91,"kind":1024,"name":"blockHash","url":"classes/nodeosblock.html#blockhash","classes":"tsd-kind-property tsd-parent-kind-class","parent":"NodeosBlock"},{"id":92,"kind":1024,"name":"blockNumber","url":"classes/nodeosblock.html#blocknumber","classes":"tsd-kind-property tsd-parent-kind-class","parent":"NodeosBlock"},{"id":93,"kind":1024,"name":"previousBlockHash","url":"classes/nodeosblock.html#previousblockhash","classes":"tsd-kind-property tsd-parent-kind-class","parent":"NodeosBlock"},{"id":94,"kind":512,"name":"constructor","url":"classes/nodeosblock.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class","parent":"NodeosBlock"},{"id":95,"kind":2048,"name":"collectActionsFromBlock","url":"classes/nodeosblock.html#collectactionsfromblock","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-protected","parent":"NodeosBlock"},{"id":96,"kind":2048,"name":"flattenArray","url":"classes/nodeosblock.html#flattenarray","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-private","parent":"NodeosBlock"},{"id":97,"kind":128,"name":"NodeosActionReader","url":"classes/nodeosactionreader.html","classes":"tsd-kind-class"},{"id":98,"kind":1024,"name":"nodeosEndpoint","url":"classes/nodeosactionreader.html#nodeosendpoint","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"NodeosActionReader"},{"id":99,"kind":512,"name":"constructor","url":"classes/nodeosactionreader.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class tsd-is-overwrite","parent":"NodeosActionReader"},{"id":100,"kind":1024,"name":"startAtBlock","url":"classes/nodeosactionreader.html#startatblock","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-overwrite","parent":"NodeosActionReader"},{"id":101,"kind":1024,"name":"onlyIrreversible","url":"classes/nodeosactionreader.html#onlyirreversible","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-overwrite tsd-is-protected","parent":"NodeosActionReader"},{"id":102,"kind":1024,"name":"maxHistoryLength","url":"classes/nodeosactionreader.html#maxhistorylength","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-overwrite tsd-is-protected","parent":"NodeosActionReader"},{"id":103,"kind":1024,"name":"requestInstance","url":"classes/nodeosactionreader.html#requestinstance","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"NodeosActionReader"},{"id":104,"kind":2048,"name":"getHeadBlockNumber","url":"classes/nodeosactionreader.html#getheadblocknumber","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-overwrite","parent":"NodeosActionReader"},{"id":105,"kind":2048,"name":"getBlock","url":"classes/nodeosactionreader.html#getblock","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-overwrite","parent":"NodeosActionReader"},{"id":106,"kind":2048,"name":"httpRequest","url":"classes/nodeosactionreader.html#httprequest","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-protected","parent":"NodeosActionReader"},{"id":107,"kind":1024,"name":"headBlockNumber","url":"classes/nodeosactionreader.html#headblocknumber","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"NodeosActionReader"},{"id":108,"kind":1024,"name":"currentBlockNumber","url":"classes/nodeosactionreader.html#currentblocknumber","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"NodeosActionReader"},{"id":109,"kind":1024,"name":"isFirstBlock","url":"classes/nodeosactionreader.html#isfirstblock","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"NodeosActionReader"},{"id":110,"kind":1024,"name":"currentBlockData","url":"classes/nodeosactionreader.html#currentblockdata","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited tsd-is-protected","parent":"NodeosActionReader"},{"id":111,"kind":1024,"name":"blockHistory","url":"classes/nodeosactionreader.html#blockhistory","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited tsd-is-protected","parent":"NodeosActionReader"},{"id":112,"kind":2048,"name":"nextBlock","url":"classes/nodeosactionreader.html#nextblock","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"NodeosActionReader"},{"id":113,"kind":2048,"name":"rollback","url":"classes/nodeosactionreader.html#rollback","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"NodeosActionReader"},{"id":114,"kind":2048,"name":"rollbackExhausted","url":"classes/nodeosactionreader.html#rollbackexhausted","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited tsd-is-protected","parent":"NodeosActionReader"},{"id":115,"kind":2048,"name":"seekToBlock","url":"classes/nodeosactionreader.html#seektoblock","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"NodeosActionReader"},{"id":116,"kind":2097152,"name":"eos","url":"index.html#eos","classes":"tsd-kind-object-literal"},{"id":117,"kind":32,"name":"NodeosActionReader","url":"index.html#eos.nodeosactionreader","classes":"tsd-kind-variable tsd-parent-kind-object-literal","parent":"eos"},{"id":118,"kind":128,"name":"JsonActionReader","url":"classes/jsonactionreader.html","classes":"tsd-kind-class"},{"id":119,"kind":512,"name":"constructor","url":"classes/jsonactionreader.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class tsd-is-overwrite","parent":"JsonActionReader"},{"id":120,"kind":1024,"name":"blockchain","url":"classes/jsonactionreader.html#blockchain","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"JsonActionReader"},{"id":121,"kind":1024,"name":"startAtBlock","url":"classes/jsonactionreader.html#startatblock","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-overwrite","parent":"JsonActionReader"},{"id":122,"kind":1024,"name":"onlyIrreversible","url":"classes/jsonactionreader.html#onlyirreversible","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-overwrite tsd-is-protected","parent":"JsonActionReader"},{"id":123,"kind":1024,"name":"maxHistoryLength","url":"classes/jsonactionreader.html#maxhistorylength","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-overwrite tsd-is-protected","parent":"JsonActionReader"},{"id":124,"kind":1024,"name":"requestInstance","url":"classes/jsonactionreader.html#requestinstance","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"JsonActionReader"},{"id":125,"kind":2048,"name":"getHeadBlockNumber","url":"classes/jsonactionreader.html#getheadblocknumber","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-overwrite","parent":"JsonActionReader"},{"id":126,"kind":2048,"name":"getBlock","url":"classes/jsonactionreader.html#getblock","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-overwrite","parent":"JsonActionReader"},{"id":127,"kind":1024,"name":"headBlockNumber","url":"classes/jsonactionreader.html#headblocknumber","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"JsonActionReader"},{"id":128,"kind":1024,"name":"currentBlockNumber","url":"classes/jsonactionreader.html#currentblocknumber","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"JsonActionReader"},{"id":129,"kind":1024,"name":"isFirstBlock","url":"classes/jsonactionreader.html#isfirstblock","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited","parent":"JsonActionReader"},{"id":130,"kind":1024,"name":"currentBlockData","url":"classes/jsonactionreader.html#currentblockdata","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited tsd-is-protected","parent":"JsonActionReader"},{"id":131,"kind":1024,"name":"blockHistory","url":"classes/jsonactionreader.html#blockhistory","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-inherited tsd-is-protected","parent":"JsonActionReader"},{"id":132,"kind":2048,"name":"nextBlock","url":"classes/jsonactionreader.html#nextblock","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"JsonActionReader"},{"id":133,"kind":2048,"name":"rollback","url":"classes/jsonactionreader.html#rollback","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"JsonActionReader"},{"id":134,"kind":2048,"name":"rollbackExhausted","url":"classes/jsonactionreader.html#rollbackexhausted","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited tsd-is-protected","parent":"JsonActionReader"},{"id":135,"kind":2048,"name":"seekToBlock","url":"classes/jsonactionreader.html#seektoblock","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-inherited","parent":"JsonActionReader"},{"id":136,"kind":2097152,"name":"testing","url":"index.html#testing","classes":"tsd-kind-object-literal"},{"id":137,"kind":32,"name":"JsonActionReader","url":"index.html#testing.jsonactionreader","classes":"tsd-kind-variable tsd-parent-kind-object-literal","parent":"testing"},{"id":138,"kind":32,"name":"AbstractActionReader","url":"index.html#readers.abstractactionreader","classes":"tsd-kind-variable tsd-parent-kind-object-literal","parent":"readers"},{"id":139,"kind":32,"name":"eos","url":"index.html#readers.eos","classes":"tsd-kind-variable tsd-parent-kind-object-literal","parent":"readers"},{"id":140,"kind":65536,"name":"__type","url":"index.html#readers.eos.__type","classes":"tsd-kind-type-literal tsd-parent-kind-variable tsd-is-not-exported","parent":"readers.eos"},{"id":141,"kind":32,"name":"testing","url":"index.html#readers.testing","classes":"tsd-kind-variable tsd-parent-kind-object-literal","parent":"readers"},{"id":142,"kind":65536,"name":"__type","url":"index.html#readers.testing.__type-1","classes":"tsd-kind-type-literal tsd-parent-kind-variable tsd-is-not-exported","parent":"readers.testing"},{"id":143,"kind":128,"name":"BaseActionWatcher","url":"classes/baseactionwatcher.html","classes":"tsd-kind-class"},{"id":144,"kind":512,"name":"constructor","url":"classes/baseactionwatcher.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class","parent":"BaseActionWatcher"},{"id":145,"kind":1024,"name":"actionReader","url":"classes/baseactionwatcher.html#actionreader","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"BaseActionWatcher"},{"id":146,"kind":1024,"name":"actionHandler","url":"classes/baseactionwatcher.html#actionhandler","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"BaseActionWatcher"},{"id":147,"kind":1024,"name":"pollInterval","url":"classes/baseactionwatcher.html#pollinterval","classes":"tsd-kind-property tsd-parent-kind-class tsd-is-protected","parent":"BaseActionWatcher"},{"id":148,"kind":2048,"name":"replay","url":"classes/baseactionwatcher.html#replay","classes":"tsd-kind-method tsd-parent-kind-class","parent":"BaseActionWatcher"},{"id":149,"kind":2048,"name":"watch","url":"classes/baseactionwatcher.html#watch","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-protected","parent":"BaseActionWatcher"},{"id":150,"kind":32,"name":"BaseActionWatcher","url":"index.html#watchers.baseactionwatcher","classes":"tsd-kind-variable tsd-parent-kind-object-literal","parent":"watchers"}]};