import {MappingModel} from "../mappingModel";
import {Type} from "reflect-helper";
import {MappingBuilderContext} from "./mappingBuilderContext";

/**
 * @hidden
 */
export class MappingBuilder {

    type: Type;
    mapping: MappingModel.Mapping;

    protected context: MappingBuilderContext;

    private _populated: boolean;

    constructor(context: MappingBuilderContext, type: Type, mapping: MappingModel.Mapping) {

        this.context = context;
        this.type = type;
        this.mapping = mapping;
    }

    populate(): void {

        if(!this._populated) {
            this._populated = true;

            this.populateCore();
        }
    }

    protected populateCore(): void {

    }
}