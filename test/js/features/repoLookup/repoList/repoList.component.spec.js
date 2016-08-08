import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { RepoListComponent } from '../../../../../src/js/features/repoLookup/repoList/repoList.component';
import repoLookupStore from '../../../../../src/js/features/repoLookup/repoLookup.store';

/* eslint-disable camelcase */

describe('RepoListComponent', () => {
    repoLookupStore.repoData = [
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

    const { repoData } = repoLookupStore;
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<RepoListComponent repoLookupStore={repoLookupStore} />);
    });

    it('should render a div container', () => {
        expect(wrapper.find(
            'div.ns-repo-list-container'
        ).length).to.equal(1);
    });

    it('should render an unordered list', () => {
        expect(wrapper.find(
            'ul'
        ).length).to.equal(1);
    });

    it('should render an li for each repo in repoData', () => {
        repoData.forEach(repo => {
            expect(wrapper.contains(
                <li>
                    <a href={repo.html_url} target="_blank">{repo.name}</a>
                </li>
            )).to.equal(true);
        });
    });

    it('should render an empty unordered list if repoData is empty', () => {
        repoLookupStore.repoData = [];

        wrapper.setProps({ repoLookupStore });

        expect(wrapper.contains(
            <ul></ul>
        )).to.equal(true);
    });
});
