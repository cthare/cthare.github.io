---
layout: page
title: Resume
permalink: /resume/
---

{% assign r = site.data.resume %}

<div class="resume">

<p class="resume-meta">
  {{ r.title }} · {{ r.location }}<br>
  <a href="mailto:{{ r.email }}">{{ r.email }}</a> ·
  <a href="{{ r.links.github }}">GitHub</a> ·
  <a href="{{ r.links.linkedin }}">LinkedIn</a><br>
  <a href="{{ '/assets/files/colin-hare-resume.pdf' | relative_url }}">Download PDF</a>
</p>

<p>{{ r.summary }}</p>

<h2>Experience</h2>

{% for role in r.experience %}
<div class="role">
  <div class="role-header">
    <h3>{{ role.role }} — {{ role.company }}</h3>
    <span class="role-dates">{{ role.start }} – {{ role.end }}</span>
  </div>
  <p class="muted">{{ role.location }}</p>
  <ul>
  {% for b in role.bullets %}
    <li>{{ b }}</li>
  {% endfor %}
  </ul>
</div>
{% endfor %}

<h2>Education</h2>
<ul>
{% for e in r.education %}
  <li>{{ e.degree }} — {{ e.institution }} ({{ e.year }})</li>
{% endfor %}
</ul>

<h2>Skills</h2>
<dl class="skills">
{% for group in r.skills %}
  <dt>{{ group[0] }}</dt>
  <dd>{{ group[1] | join: ", " }}</dd>
{% endfor %}
</dl>

</div>
