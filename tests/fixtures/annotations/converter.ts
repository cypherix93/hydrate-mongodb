import {Entity, Converter, Field} from "../../../src/mapping/providers/decorators";
import {PropertyConverter} from "../../../src/mapping/propertyConverter";

export enum MyEnum {

    value1,
    value2,
    value3
}

class SomeConverter implements PropertyConverter {

    convertToDocumentField(property: any): any {

        switch(property) {
            case MyEnum.value1:
                return "A";
            case MyEnum.value1:
                return "B";
            case MyEnum.value3:
                return "C";
        }
    }

    convertToObjectProperty(field: any): any {

        switch(field) {
            case "A":
                return MyEnum.value1;
            case "B":
                return MyEnum.value2;
            case "C":
                return MyEnum.value3;
        }
    }
}

@Entity()
export class B {

    @Converter("MyEnumConverter")
    a: MyEnum;

    @Converter(new SomeConverter())
    b: MyEnum;
}

