import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl my-10 text-center'> <span className='text-red-500 '>Question</span> <span className='text-success'>Ans Pages</span></h1>

            <div className='w-3/4 mx-auto'>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </div>
                    <div className="collapse-content">
                        <p>Access Token and Refresh Token: Refresh tokens allow you to balance your users access needs with your organizations security practices. Access tokens help users get the resources they need to complete their tasks,
                            Stored Token:
                            1.HTTP-only Cookies: Storing tokens as HTTP-only cookies provides a level of security by preventing client-side scripts from accessing the cookie contents.
                            2.Local Storage or Session Storage: Both local storage and session storage are web storage APIs provided by modern browsers. However, it is important to note that storing tokens in these mechanisms can be vulnerable to cross-site scripting (XSS) attacks
                            3.IndexedDB: IndexedDB is a more advanced client-side database available in modern browsers. It offers a structured and persistent storage mechanism, allowing you to store tokens securely.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                        Compare SQL and NoSQL databases?
                    </div>
                    <div className="collapse-content">
                        <p>SQL and NoSQL databases:
                            SQL: SQL databases define and manipulate data-based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice, especially for great complex queries. But from another side, it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it.
                            NoSQL: NoSQL databases prioritize scalability and performance over strict ACID compliance. However, some NoSQL databases offer varying degrees of consistency models. NoSQL databases are generally schema-less or have flexible schemas, allowing for dynamic changes to the data structure without requiring alterations to existing records.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                        What is express js? What is Nest JS?
                    </div>
                    <div className="collapse-content">
                        <p>express js:

                            Express JS is a Node.js framework designed to build API is web applications cross-platform mobile apps quickly and make node js easy.. Express.js is known for its simplicity, flexibility, and a large ecosystem of middleware that can be easily integrated to enhance its functionality.
                            Nest js: NestJS is a NodeJS framework that is used for building scalable server-side applications. With NestJS, you can have readable and predictable code, TypeScript makes it more popular. It is an extensible, progressive and versatile framework.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                    What is MongoDB aggregate and how does it work?
                    </div>
                    <div className="collapse-content">
                        <p>MongoDB aggregate: MongoDB provides aggregation operations through aggregation pipelines — a series of operations that process data documents sequentially.Once all stages in the pipeline are processed, the final result is returned as the output of the aggregate method. The result can be a cursor, an array, or a document, depending on the specific operations performed in the pipeline</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;