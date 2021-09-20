---
layout: landing-banner
title: Resources
subtitle: From workshop slides to python guides
colour: is-warning
---

<div class="hero-body background-shade">
<div class="container is-fluid">
    <div class="columns">
        <div class="column is-2">
            <div class="field is-horizontal is-left">
                <div class = "field-label is-normal">
                    <label class = "label" for="searchBox">Search</label>
                </div>
                <div class = "field-body">
                    <div class = "field">
                    <p class = "control is-pulled-left">
                        <input class="input" id="searchBox" type = "text" placeholder="Search terms...">
                    </p>
                    </div>
                </div>
            </div>
            <br>
            <h2 class='subtitle is-6'><b>Tags</b></h2>
            {% for tag in site.data.resource_tags %}
            <label class="checkbox">
                <input type="checkbox" class="resource-tag"> {{ tag }}
            </label>
            <br>
            {% endfor %}
        </div>
        <div class='column is-10'>
            <div class='columns is-multiline is-centered'>
                {% for resource in site.data.resources %}
                <div class='column is-4 search'>
                    <div class='card'>
                        <div class='card-content'>
                            <a href="{{ resource.resources }}" target="_blank">
                                <p class='title is-5'>{{ resource.title }}</p>
                            </a>
                            <p class='subtitle is-6'>{{ resource.date }}</p>
                            <div class='content'>
                                <p>{{ resource.description }}</p>
                            </div>
                            <!--resources button-->
                            {% if resource.resources %}
                                <a href="{{ resource.resources }}" target="_blank">
                                <button  class="button is-info">
                                    <span>View Resources</span>
                                </button></a>
                            {% else %}
                            <button class="button is-disabled">
                                <span>No Resources</span>
                            </button>
                            {% endif %}
                            <!--end button-->
                            <br>
                            <br>
                            <p>Tags:</p>
                            <div class='c-footer'>
                                {% for r in resource.tags %}
                                    <button class="button is-small" style="margin: 1%; cursor: default">{{ r }}</button>
                                {% endfor %}
                                <!--{{ resource.tags }}-->
                            </div>
                        </div>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>
    </div>
</div>
</div>
<link rel="stylesheet" href="/assets/css/paginate.css">

<script>

let resources = document.getElementsByClassName('search')
let search_box = document.getElementById('searchBox');
search_box.setAttribute("onkeyup","filter_search()")

function filter_search(word) {
    word = search_box.value;
    if (word == "") {

        for (let resource of resources) {
            resource.style.display = "";
        }

    } else {

        word = word.toLowerCase();
        for (let resource of resources) {
            let str = resource.getElementsByClassName('title')[0].innerText;
            str = str.toLowerCase();
            let pos = str.search(word);
            if (pos == -1) {
                resource.style.display = "none";
            }
        }
    } 
}

function tags_are_checked(checkboxes, tags) {
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            checkbox_text = checkbox.parentElement.innerText;
            checkbox_text = checkbox_text.substring(1,);
            if (tags.search(checkbox_text) != -1) {
                return true;
            } 
        }
    }
    return false;
}

function no_boxes_checked(checkboxes) {
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            return false;
        }
    }
    return true;
}


let checkboxes = document.getElementsByClassName('resource-tag');
for (let checkbox of checkboxes) {
    checkbox.onclick = function() {

        // Reset checkboxes if all unticked
        if (no_boxes_checked(checkboxes)) {
            for (let resource of resources) {
                resource.style.display = "";
            }
        } else {

            // For each resource card check if tags belong to set of ticked checkboxes
            for (let resource of resources) {
                let tags = resource.getElementsByClassName('c-footer')[0].innerText;
                if (tags_are_checked(checkboxes,tags)) {
                    resource.style.display = "";
                } else {
                    resource.style.display = "none";
                }
            }
        }
    }
}
</script>
