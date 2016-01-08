import {MappingError} from "./mappingError";
import {VirtualMapping} from "./virtualMapping";
import {MappingFlags} from "./mappingFlags";
import {InternalSession} from "../internalSession";
import {ReadContext} from "./readContext";
import {IdentityGenerator} from "../id/identityGenerator";

// TODO: Not sure I like how this is implemented. A few thoughts:
//  1. If we want to allow queries against these types of fields then we need to implement write so the query document
//      can be serialized. However, we don't want the values to be written to the database so then we need to distinguish
//      between are write to a query document and a write to a persistent document. We don't do that right now.
//  2. Perhaps instead of a mapper we use a converter and the IdAnnotation causes a converter to be added to the property
//      and the read-only flag set.
export class IdentityMapping extends VirtualMapping {

    read(context: ReadContext, value: any): any {

        // We don't bother validating the identity, other than that there is one, because the identity is validated by
        // the EntityMapping.
        if(value == null) {
            context.addError("Missing identity.");
            return;
        }

        return value.toString();
    }

    write(value: any, path: string, errors: MappingError[], visited: any[]): any {

        // do nothing
    }
}