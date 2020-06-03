---
layout: landing
title: Our Team
title-image: city2_left.png
permalink: /about/team-modal/
introduction: |
  Surprisingly, even in this era of automation, UNSW DataSoc is still managed by a team of longwithstanding, soon-to-be-obsolete humans.
  <br><br>
  We are, however, all extremely proud to be a part of this amazing society to help other students develop skills and knowledge in data science and artificial intelligence.
  <br><br>
  <b><i>TODO:</i></b>
  <br>
  <ul><li>Get nice photos of everyone</li><li>Get a quote/q&a from everyone</li></ul>
---

<div class="hero-body">
	<div class="tabs is-boxed is-centered main-menu is-large" id="nav">
		<ul>
			<li data-target="pane-1" id="1" class="is-active">
				<a><h2 class="title is-3">Execs</h2></a>
			</li>
			<li data-target="pane-2" id="2">
				<a><h2 class="title is-3">External</h2></a>
			</li>
			<li data-target="pane-3" id="3">
				<a><h2 class="title is-3">Internal</h2></a>
			</li>
			<li data-target="pane-4" id="4">
				<a><h2 class="title is-3">Postgrad</h2></a>
			</li>
		</ul>
	</div>
	<div class="tab-content">
	{% for portfolio in site.data.team %}
		{% if forloop.first == true %}
			{% assign active_status = "is-active" %}
		{% else %}
			{% assign active_status = "" %}
		{% endif %}
		<div class="tab-pane {{ active_status }}" id="pane-{{ forloop.index }}">
			<div class="content">
				<div class="container">
					{% assign remaining_people = portfolio[1].size %}
					{% for person in portfolio[1] %}
					{% assign value = forloop.index0 | modulo: 4 %}
					{% if value == 0 %}
						{% if forloop.index0 != 0 %}
					</div>
						{% endif %}
					<div class="columns">
						{% if remaining_people == 2 %}
					<div class="column is-3">
					</div>
						{% endif %}
					{% endif %}
						<div class="column is-3 modal-button" data-target="modal-ter"> 
							<div class="card is-shady">
								<div class="card-image is-square">
								  <figure class="image is-256x256">
									<img src="{{ person.image | prepend: '/assets/images/team/' }}" alt="Placeholder image">
								  </figure>
								</div>
								<div class="card-content">
									<div class="media">
										<div class="media-content">
											<p class="title is-4">{{ person.name }}</p>
											<p class="subtitle is-6">{{ person.position }}</p>
										</div>
									</div>
									<div class="content">
										<p><i>{{ person.degree }}</i></p>
										<p>{{ person.description }}</p>
									</div>
								</div>
							</div>
						</div>
					{% assign remaining_people = remaining_people | minus: 1 %}
					{% endfor %}
					</div>
				</div>
			</div>
		</div>
	{% endfor %}
<div id="modal-ter" class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <div class="content">
        <h1>Hello World</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
        <h2>Second level</h2>
        <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
        <ul>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
          <li>Ut non enim metus.</li>
        </ul>
        <h3>Third level</h3>
        <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
        <ol>
          <li>Donec blandit a lorem id convallis.</li>
          <li>Cras gravida arcu at diam gravida gravida.</li>
          <li>Integer in volutpat libero.</li>
          <li>Donec a diam tellus.</li>
          <li>Aenean nec tortor orci.</li>
          <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
          <li>Vivamus maximus ultricies pulvinar.</li>
        </ol>
        <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
        <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
        <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
        <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
        <h4>Fourth level</h4>
        <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
        <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
        <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
        <h5>Fifth level</h5>
        <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
        <h6>Sixth level</h6>
        <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
</div>