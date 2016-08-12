import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import _ from 'lodash';

import { RepoListComponent } from '../../../../../src/js/features/repoLookup/repoList/repoList.comp';
import repoLookupStore from '../../../../../src/js/features/repoLookup/repoLookup.store';

/* eslint-disable camelcase */

const repoData = [
    {
        name: 'repo1',
        html_url: 'html1'
    },
    {
        name: 'repo2',
        html_url: 'html2'
    },
    {
        name: 'repo3',
        html_url: 'html3'
    }
];

repoLookupStore.repoData = repoData;

let wrapper;

test.beforeEach(() => {
    wrapper = shallow(<RepoListComponent repoLookupStore={repoLookupStore} />);
});

test('render a containing div', t => {
    t.truthy(wrapper.is('div'));
});

test('render a ul as first and only child of the container', t => {
    const containerChildren = wrapper.children();
    const typeOfFirstChild = containerChildren.first().type();
    const numberOfChildren = containerChildren.length;

    t.is(typeOfFirstChild, 'ul');
    t.is(numberOfChildren, 1);
});

test('render an li in the ul for each repo in repoData', t => {
    t.plan(3);

    const listChildren = wrapper.find('ul').children();

    repoData.forEach((repo, index) => {
        const expectedElement = (
            <li key={repo.name} className={undefined}>
                <a href={repo.html_url} target="_blank"
                    className={undefined}>
                    {repo.name}
                </a>
            </li>
        );

        const doesChildAtIndexMatchExpected = listChildren.at(index).matchesElement(expectedElement);

        t.truthy(doesChildAtIndexMatchExpected);
    });
});

test('render an empty ul if repoData is empty', t => {
    const storeWithEmptyRepoList = _.assign({}, repoLookupStore, { repoData: [] });

    wrapper.setProps({ repoLookupStore: storeWithEmptyRepoList });

    const numberOfListChildren = wrapper.find('ul').children().length;

    t.is(numberOfListChildren, 0);
});
