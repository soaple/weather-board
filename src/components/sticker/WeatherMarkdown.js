import React, { useState } from 'react';
import { Markdown } from '@stickyboard/markdown';

function WeatherMarkdown(props) {
    const [content, setContent] = useState(
        "# Today's weather\n## Today's weather is expected to be clear, with temperatures expected to be as low as 25 degrees Celsius and as high as 30 degrees Celsius.\n## It is expected to rain all day tomorrow, so please take an umbrella with you when you go out."
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
