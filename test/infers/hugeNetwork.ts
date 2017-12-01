import * as expect from 'expect';
import { allNodes } from '../../models/huge-network';
import { createNetwork } from '../../src/utils/index';
import { junctionTree, variableElimination } from '../../src/inferences/index';
import { IInfer } from '../../src/types/index';

const montTest = (network, given) => {
  //const given = { 'node1': 'F' };
  const { infer } = variableElimination;
  
  Array.from({ length: 39 }).map((_, i) => {
    const nodeName = `node${i+1}`;
    const T = infer(network, { [nodeName]: 'T' }, given).toFixed(4);
    const F = infer(network, { [nodeName]: 'F' }, given).toFixed(4);

    console.log(`expect(infer(network, { '${nodeName}': 'T' }, given).toFixed(4)).toBe('${T}');`);
    console.log(`expect(infer(network, { '${nodeName}': 'F' }, given).toFixed(4)).toBe('${F}');`);
  });
}

const infersGiveNode1True = network => (infer: IInfer) => {
  const given = { 'node1': 'T' };

  expect(infer(network, { 'node1': 'T' }, given).toFixed(4)).toBe('1.0000');
  expect(infer(network, { 'node1': 'F' }, given).toFixed(4)).toBe('0.0000');
  expect(infer(network, { 'node2': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node2': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node3': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node3': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node4': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node4': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node5': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node5': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node6': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node6': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node7': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node7': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node8': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node8': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node9': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node9': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node10': 'T' }, given).toFixed(4)).toBe('0.9899');
  expect(infer(network, { 'node10': 'F' }, given).toFixed(4)).toBe('0.0101');
  expect(infer(network, { 'node11': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node11': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node12': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node12': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node13': 'T' }, given).toFixed(4)).toBe('0.9899');
  expect(infer(network, { 'node13': 'F' }, given).toFixed(4)).toBe('0.0101');
  expect(infer(network, { 'node14': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node14': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node15': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node15': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node16': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node16': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node17': 'T' }, given).toFixed(4)).toBe('0.9899');
  expect(infer(network, { 'node17': 'F' }, given).toFixed(4)).toBe('0.0101');
  expect(infer(network, { 'node18': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node18': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node19': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node19': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node20': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node20': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node21': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node21': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node22': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node22': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node23': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node23': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node24': 'T' }, given).toFixed(4)).toBe('0.0101');
  expect(infer(network, { 'node24': 'F' }, given).toFixed(4)).toBe('0.9899');
  expect(infer(network, { 'node25': 'T' }, given).toFixed(4)).toBe('0.9999');
  expect(infer(network, { 'node25': 'F' }, given).toFixed(4)).toBe('0.0001');
  expect(infer(network, { 'node26': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node26': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node27': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node27': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node28': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node28': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node29': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node29': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node30': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node30': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node31': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node31': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node32': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node32': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node33': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node33': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node34': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node34': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node35': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node35': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node36': 'T' }, given).toFixed(4)).toBe('0.0000');
  expect(infer(network, { 'node36': 'F' }, given).toFixed(4)).toBe('1.0000');
  expect(infer(network, { 'node37': 'T' }, given).toFixed(4)).toBe('0.9899');
  expect(infer(network, { 'node37': 'F' }, given).toFixed(4)).toBe('0.0101');
  expect(infer(network, { 'node38': 'T' }, given).toFixed(4)).toBe('0.9899');
  expect(infer(network, { 'node38': 'F' }, given).toFixed(4)).toBe('0.0101');
  expect(infer(network, { 'node39': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node39': 'F' }, given).toFixed(4)).toBe('0.0100');
}

const infersGiveNode1False = network => (infer: IInfer) => {
  const given = { 'node1': 'F' };
  
  expect(infer(network, { 'node1': 'T' }, given).toFixed(4)).toBe('0.0000');
  expect(infer(network, { 'node1': 'F' }, given).toFixed(4)).toBe('1.0000');
  expect(infer(network, { 'node2': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node2': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node3': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node3': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node4': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node4': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node5': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node5': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node6': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node6': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node7': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node7': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node8': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node8': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node9': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node9': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node10': 'T' }, given).toFixed(4)).toBe('0.9899');
  expect(infer(network, { 'node10': 'F' }, given).toFixed(4)).toBe('0.0101');
  expect(infer(network, { 'node11': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node11': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node12': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node12': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node13': 'T' }, given).toFixed(4)).toBe('0.9899');
  expect(infer(network, { 'node13': 'F' }, given).toFixed(4)).toBe('0.0101');
  expect(infer(network, { 'node14': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node14': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node15': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node15': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node16': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node16': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node17': 'T' }, given).toFixed(4)).toBe('0.9899');
  expect(infer(network, { 'node17': 'F' }, given).toFixed(4)).toBe('0.0101');
  expect(infer(network, { 'node18': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node18': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node19': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node19': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node20': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node20': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node21': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node21': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node22': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node22': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node23': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node23': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node24': 'T' }, given).toFixed(4)).toBe('0.5000');
  expect(infer(network, { 'node24': 'F' }, given).toFixed(4)).toBe('0.5000');
  expect(infer(network, { 'node25': 'T' }, given).toFixed(4)).toBe('0.5000');
  expect(infer(network, { 'node25': 'F' }, given).toFixed(4)).toBe('0.5000');
  expect(infer(network, { 'node26': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node26': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node27': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node27': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node28': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node28': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node29': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node29': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node30': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node30': 'F' }, given).toFixed(4)).toBe('0.0100');
  expect(infer(network, { 'node31': 'T' }, given).toFixed(4)).toBe('0.5000');
  expect(infer(network, { 'node31': 'F' }, given).toFixed(4)).toBe('0.5000');
  expect(infer(network, { 'node32': 'T' }, given).toFixed(4)).toBe('0.5000');
  expect(infer(network, { 'node32': 'F' }, given).toFixed(4)).toBe('0.5000');
  expect(infer(network, { 'node33': 'T' }, given).toFixed(4)).toBe('0.5000');
  expect(infer(network, { 'node33': 'F' }, given).toFixed(4)).toBe('0.5000');
  expect(infer(network, { 'node34': 'T' }, given).toFixed(4)).toBe('0.5000');
  expect(infer(network, { 'node34': 'F' }, given).toFixed(4)).toBe('0.5000');
  expect(infer(network, { 'node35': 'T' }, given).toFixed(4)).toBe('0.5000');
  expect(infer(network, { 'node35': 'F' }, given).toFixed(4)).toBe('0.5000');
  expect(infer(network, { 'node36': 'T' }, given).toFixed(4)).toBe('0.0000');
  expect(infer(network, { 'node36': 'F' }, given).toFixed(4)).toBe('1.0000');
  expect(infer(network, { 'node37': 'T' }, given).toFixed(4)).toBe('0.9899');
  expect(infer(network, { 'node37': 'F' }, given).toFixed(4)).toBe('0.0101');
  expect(infer(network, { 'node38': 'T' }, given).toFixed(4)).toBe('0.9899');
  expect(infer(network, { 'node38': 'F' }, given).toFixed(4)).toBe('0.0101');
  expect(infer(network, { 'node39': 'T' }, given).toFixed(4)).toBe('0.9900');
  expect(infer(network, { 'node39': 'F' }, given).toFixed(4)).toBe('0.0100');
};

const tests = {
  'infers give Node1 True': infersGiveNode1True,
  'infers give Node1 False': infersGiveNode1False,
};

describe('infers', () => {
  describe('hugeNetwork', () => {
    const network = createNetwork(...allNodes);
    const testNames = Object.keys(tests);

    for (const testName of testNames) {
      const createMethod = tests[testName];
      const method = createMethod(network);

      it(`${testName} with Junction Tree`, () => method(junctionTree.infer));
    }

    // montTest(network, { 'node1': 'T' })
  });
});