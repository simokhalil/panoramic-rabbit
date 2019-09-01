import React from 'react';
import _ from 'lodash';

import {markdownify, Link, htmlToReact} from '../utils';

export default class Contact extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class={'wrapper ' + _.get(this.props, 'section.background_style') + ' fade-up'}>
                <div class="inner">
                    <h2>{_.get(this.props, 'section.title')}</h2>
                    {markdownify(_.get(this.props, 'section.text'))}
                    <div class="split style1">
                        <section>
                            <form method="post" action="#">
                                <div class="fields">
                                    <div class="field half">
                                        <label for="name">Name</label>
                                        <input type="text" name="name" id="name" />
                                    </div>
                                    <div class="field half">
                                        <label for="email">Email</label>
                                        <input type="text" name="email" id="email" />
                                    </div>
                                    <div class="field">
                                        <label for="message">Message</label>
                                        <textarea name="message" id="message" rows="5" />
                                    </div>
                                </div>
                                <ul class="actions">
                                    <li><Link to="" class="button submit">Send Message</Link></li>
                                </ul>
                            </form>
                        </section>
                        <section>
                            <ul class="contact">
                                {_.get(this.props, 'section.contact_list') && 
                                    _.map(_.get(this.props, 'section.contact_list'), (item, item_idx) => (
                                        <li key={item_idx}>
                                            <h3>{_.get(item, 'title')}</h3>
                                            {_.get(item, 'url') ? 
                                                <Link to={_.get(item, 'url')}>{_.get(item, 'text')}</Link>
                                             : 
                                                <span>{htmlToReact(_.get(item, 'text').replace(/\n/g, '<br />'))}</span>
                                            }
                                        </li>
                                    ))
                                }
                                {_.get(this.props, 'section.social') && 
                                    <li>
                                        <h3>{_.get(this.props, 'section.social.title')}</h3>
                                        <ul class="icons">
                                            {_.map(_.get(this.props, 'section.social.social_icons'), (item, item_idx) => (
                                                <li key={item_idx}><Link to={_.get(item, 'url')} class={_.get(item, 'icon')}><span class="label">{_.get(item, 'title')}</span></Link></li>
                                            ))}
                                        </ul>
                                    </li>
                                }
                            </ul>
                        </section>
                    </div>
                </div>
            </section>
        );
    }
}
