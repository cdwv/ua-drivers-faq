import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { Button, Header, Content, Delimiter } from 'flotiq-components-react';
import Layout from '../layouts/layout';

/**
 * Content of index page
 */
const IndexPage = () => {
    const driversQuestions = useStaticQuery(query).driversQuestions.nodes;
    const refugeesQuestions = useStaticQuery(query).refugeesQuestions.nodes;
    const [language, setLanguage] = useState('pl');
    const [type, setType] = useState('drivers');

    return (
        <Layout language={language} setLanguage={setLanguage}>
            <Helmet>
                <title>Main page</title>
            </Helmet>
            <div className="flex px-0 md:px-4">
                <Button
                    label={language === 'ua' ? 'Водії' : 'Kierowcy'}
                    onClick={() => setType('drivers')}
                    rounded="none"
                    variant={type === 'drivers' ? 'primary' : 'light'}
                    additionalClasses={['grow', 'justify-center']}
                />
                <Button
                    label={language === 'ua' ? 'Біженці' : 'Uchodźcy'}
                    onClick={() => setType('refugees')}
                    rounded="none"
                    variant={type === 'refugees' ? 'primary' : 'light'}
                    additionalClasses={['grow', 'justify-center']}
                />
            </div>
            <div className="px-4 mx-auto w-7xl max-w-[90%]">
                <div className={type === 'drivers' ? '' : 'hidden'}>
                    {driversQuestions.map((question) => (
                        <div key={question.id} className="border border-light px-4 mt-4">
                            <Header level={3} text={question[`question_${language}`]} />
                            <Delimiter variant="light" />
                            <Content blocks={question[`answer_${language}`].blocks} />
                        </div>
                    ))}
                </div>
                <div className={type === 'drivers' ? 'hidden' : ''}>
                    {refugeesQuestions.map((question) => (
                        <div key={question.id} className="border border-light px-4 mt-4">
                            <Header level={3} text={question[`question_${language}`]} />
                            <Content blocks={question[`answer_${language}`].blocks} />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

const query = graphql`
    query indexQuery {
        driversQuestions: allFaq(filter: {for_who: {eq: "drivers"}}) {
            nodes {
                question_pl
                question_ua
                answer_pl {
                    blocks {
                        data {
                            alignment
                            anchor
                            caption
                            code
                            content
                            extension
                            fileName
                            height
                            items {
                                content
                                items {
                                    content
                                    items {
                                        content
                                        items {
                                            content
                                        }
                                    }
                                }
                            }
                            level
                            message
                            stretched
                            style
                            text
                            title
                            url
                            width
                            withBackground
                            withBorder
                            withHeadings
                        }
                        tunes {
                            alignmentTuneTool {
                                alignment
                            }
                        }
                        type
                        id
                    }
                }
                answer_ua {
                    blocks {
                        data {
                            alignment
                            anchor
                            caption
                            code
                            content
                            extension
                            fileName
                            height
                            items {
                                content
                                items {
                                    content
                                    items {
                                        content
                                        items {
                                            content
                                        }
                                    }
                                }
                            }
                            level
                            message
                            stretched
                            style
                            text
                            title
                            url
                            width
                            withBackground
                            withBorder
                            withHeadings
                        }
                        tunes {
                            alignmentTuneTool {
                                alignment
                            }
                        }
                        type
                        id
                    }
                }
                id
                for_who
            }
        }
        refugeesQuestions: allFaq(filter: {for_who: {eq: "refugees"}}) {
            nodes {
                question_pl
                question_ua
                answer_pl {
                    blocks {
                        data {
                            alignment
                            anchor
                            caption
                            code
                            content
                            extension
                            fileName
                            height
                            items {
                                content
                                items {
                                    content
                                    items {
                                        content
                                        items {
                                            content
                                        }
                                    }
                                }
                            }
                            level
                            message
                            stretched
                            style
                            text
                            title
                            url
                            width
                            withBackground
                            withBorder
                            withHeadings
                        }
                        tunes {
                            alignmentTuneTool {
                                alignment
                            }
                        }
                        type
                        id
                    }
                }
                answer_ua {
                    blocks {
                        data {
                            alignment
                            anchor
                            caption
                            code
                            content
                            extension
                            fileName
                            height
                            items {
                                content
                                items {
                                    content
                                    items {
                                        content
                                        items {
                                            content
                                        }
                                    }
                                }
                            }
                            level
                            message
                            stretched
                            style
                            text
                            title
                            url
                            width
                            withBackground
                            withBorder
                            withHeadings
                        }
                        tunes {
                            alignmentTuneTool {
                                alignment
                            }
                        }
                        type
                        id
                    }
                }
                id
                for_who
            }
        }
    }
`;

export default IndexPage;
