import React from 'react';

const WebDev = () => {
    const categories = [
        {
            title: 'AI & Automation',
            skills: [
                'Generative AI',
                'Prompt Engineering',
                'LLM Applications',
                'AI-Assisted Development',
                'Workflow Automation',
            ],
        },
        {
            title: 'Frontend',
            skills: [
                'React',
                'Redux',
                'Next.js',
                'Angular',
                'Vue.js',
                'TypeScript',
                'JavaScript',
                'HTML',
                'CSS',
                'Tailwind CSS',
                'MUI',
                'Bootstrap',
            ],
        },
        {
            title: 'Backend',
            skills: [
                'Java',
                'Spring Boot',
                'Node.js',
                'Express',
                'Nest.js',
                'GraphQL',
                'RESTful APIs',
                'MongoDB',
                'SQL',
                'PostgreSQL',
            ],
        },
        {
            title: 'DevOps & Cloud',
            skills: [
                'Docker',
                'Kubernetes',
                'AWS',
                'Azure',
                'Jenkins',
                'CI/CD',
                'SonarQube',
                'Postman',
                'Jira' + ' Confluence',
                'Git', 'GitHub'
            ],
        },
        {
            title: 'Core Concepts',
            skills: [
                'OOP',
                'DSA',
                'Microservices',
                'Design Patterns',
                'System Design',
                'Software Architecture',
                'Agile / Scrum',
            ],
        },
        {
            title: 'Languages',
            skills: ['C++', 'Java', 'Python', 'JavaScript', 'SQL'],
        },
    ];

    return (
        <div className="skills__content">
            <div className="skills__box">
                <div className="skills__cards">
                    {categories.map((category) => (
                        <article className="skills__card" key={category.title}>
                            <h3 className="skills__card-title">{category.title}</h3>
                            <div className="skills__chips">
                                {category.skills.map((skill) => (
                                    <span className="skills__chip" key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WebDev;
