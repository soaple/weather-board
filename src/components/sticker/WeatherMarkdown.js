import React from 'react';
import { Markdown } from '@stickyboard/markdown';

const content = "# Today's weather\n## Sunny\n### Forecast";

function WeatherMarkdown(props) {
    return (
        <Markdown
            editable
            content={content}
            onSave={(content) => {
                // TODO: save your new content
            }}
        />
    );
}

export default WeatherMarkdown;
