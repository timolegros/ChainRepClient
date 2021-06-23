import { IPFS } from 'ipfs-core';
import * as utils from 'web3-utils';

export interface IIPFS {
    ipfs: IPFS;
    init(): Promise<void>;
    add(): Promise<void>;
}

export interface IToken {
    name: Bytes<32>;
    editTime: Date;
    description: string;
    interaction_standards: IActStandard[];
    metaData?: any;
    badges?: any;
    misc?: any;
}

export interface IActStandard {
    name: string;
    editTime: Date;
    description: string;
    value: number;
    misc?: any;
}

type Bytes<Length> = string & {
    __value__: never;
};

const isBytesOfLength = <Length extends number>(str: string, length: Length): str is Bytes<Length> =>
    str.length === length;

// type constructor function
export const bytes = <Length extends number>(input: unknown, length: Length): Bytes<Length> => {
    if (typeof input !== 'string') {
        throw new Error('invalid input');
    }

    if (!isBytesOfLength(input, length)) {
        throw new Error('input is not the specified size');
    }

    return input;
};
