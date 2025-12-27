# Configuration json template is mentioned below
```
{
    "component_name": {
        "component_heading": "locale_key",
        "component_sub_heading": "locale_key",
        "component_main_image": "src",
        "component_main_image_text": "locale_key",
        "component_elements": [
            {
                "element_image": "src",
                "element_heading": "locale_key",
                "element_summary": "locale_key",
                "element_know_more_href": "src"
            },
            {
                "element_image": "src",
                "element_heading": "locale_key",
                "element_summary": "locale_key",
                "element_know_more_href": "src"
            },
            {
                "element_image": "src",
                "element_heading": "locale_key",
                "element_summary": "locale_key",
                "element_know_more_href": "src"
            }
        ],
        // any other configuration to be followed as needed
    }
}
```
# Please refer to the sample.json for sample

JSON key and value instructions
```
There can be following element in the configuration file
    1. Text
    2. Multimedia
    3. Component
    4. Will be adding more elements in the future and will be writing the value type accordingly

    For Text case, the value will be a locale_key
    For Multimedia case, the value will be a link/src/href etc
    For Component case, the value will be a link to the component
```