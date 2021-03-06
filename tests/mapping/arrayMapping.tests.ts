import {assert} from "chai";
import {ArrayMapping} from "../../src/mapping/arrayMapping";
import {EntityMapping} from "../../src/mapping/entityMapping";
import {ObjectIdGenerator} from "../../src/config/objectIdGenerator";
import {ReadContext} from "../../src/mapping/readContext";

describe('ArrayMapping', () => {

    describe('read', () => {

        it('passes through null values in array', () => {

            var mapping = createMapping();
            var context = new ReadContext(null);

            var result = mapping.read(context, [null]);

            assert.deepEqual(result, [null]);
        });

        it('transforms undefined values to null values', () => {

            var mapping = createMapping();
            var context = new ReadContext(null);

            var result = mapping.read(context, [undefined]);

            assert.deepEqual(result, [null]);
        });
    });
});

function createMapping(): ArrayMapping {

    var entityMapping = new EntityMapping();
    entityMapping.inheritanceRoot = entityMapping;
    entityMapping.identity = new ObjectIdGenerator();

    var mapping = new ArrayMapping(entityMapping);

    return mapping;
}