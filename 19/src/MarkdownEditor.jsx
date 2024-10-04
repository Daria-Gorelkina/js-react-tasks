import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
export default class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
    }

    componentDidMount() {
        this.editorInstance = new Editor({
            el: this.editorRef.current,
            hideModeSwitch: true,
        });

        this.editorInstance.addHook('change', () => {
            const content = this.editorInstance.getMarkdown();
            this.props.onContentChange(content);
        });
    }

    render() {
        return <div ref={this.editorRef}></div>;
    }
}
// END
