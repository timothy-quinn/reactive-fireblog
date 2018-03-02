import React from 'react';
import ReactDisqusThread from 'react-disqus-thread';

export default function PostComments(props) {
    return (
        <ReactDisqusThread
            shortname={'example'}
            identifier={'something-unique-12345'}
            title={'Example Thread'}
            url={'http://www.example.com/example-thread'}
            category_id={'123456'} />
    );
}
