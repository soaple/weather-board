import React, { useState } from 'react';
import { Markdown } from '@stickyboard/markdown';

function WeatherMarkdown(props) {
    const [content, setContent] = useState(
        "# Today's weather\n## Sunny\n### Forecast"
    );

    return (
        <Markdown
            editable
            content={content}
            onSave={(content) => {
                setContent(content);
            }}
        />
    );
}

export default WeatherMarkdown;
