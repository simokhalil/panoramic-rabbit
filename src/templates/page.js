import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {safePrefix, htmlToReact} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <div id="wrapper">
                    <section id="main" class="wrapper">
                        <div class="inner">
                            <h1 class="major">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                            {_.get(this.props, 'pageContext.frontmatter.content_img_path') && 
                                <span class="image fit"><img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path'))} alt="" /></span>
                            }
                            {htmlToReact(_.get(this.props, 'pageContext.html'))}
                        </div>
                    </section>
                </div>
            </Layout>
        );
    }
}
