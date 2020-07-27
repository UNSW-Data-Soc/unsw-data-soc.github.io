---
layout: default
---
<section class="hero is-primary" style='background-color: #21D4FD;
background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);'>
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Resources
      </h1>
      <h2 class="subtitle">
        From workshop slides to python guides
      </h2>
    </div>
  </div>
</section>

<br><br>
<div class="content">
<div class="container is-fluid">
    <div class='columns'>
        <div class='column is-3'>
            <div class="field is-horizontal is-left">
                <div class = "field-label is-normal is-left">
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
            <p>Tags</p>
            {% for tag in site.data.resource_tags %}
            <label class="checkbox">
                <input type="checkbox" class="resource-tag"> {{ tag }}
            </label>
            {% endfor %}
        </div>
        <div class='column is-9'>
            <div class='columns is-multiline is-centered'>
                {% for resource in site.data.resources %}
                <div class='column is-4 search'>
                    <div class='card'>
                        <div class='card-content'>
                            <p class='title is-5'>{{ resource.title }}</p>
                            <div class='content'>
                                <p>{{ resource.description }}</p>
                            </div>
                            <!--resources button-->
                            {% if resource.resources %}
                                <a href="{{ resource.resources }}" target="_blank">
                                <button  class="button is-info" style='background-color: #5e9bfe;'>
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
                                    <button class='button is-small' style='margin: 1%;'>{{ r }}</button>
                                {% endfor %}
                                <!--{{ resource.tags }}-->
                            </div>
                        </div>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>
    {% endcomment %}
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
            console.log('hey')
            for (let resource of resources) {
                resource.style.display = "";
            }
        } else {

            //For each resource card check if tags belong to set of ticked checkboxes
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

