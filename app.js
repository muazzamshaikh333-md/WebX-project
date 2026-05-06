// Shared sidebar + page setup
function renderSidebar(active){
  const html = `
    <div class="brand">
      <div class="brand-logo">CP</div>
      <div>
        <div class="brand-name">CampusPath</div>
        <div class="brand-sub">Placement Cell</div>
      </div>
    </div>
    <div class="nav-label">Student</div>
    <nav class="nav">
      <a href="index.html" data-key="dashboard">📊 <span>Dashboard</span></a>
      <a href="opportunities.html" data-key="opportunities">💼 <span>Opportunities</span></a>
      <a href="applications.html" data-key="applications">📥 <span>Applications</span></a>
      <a href="resume.html" data-key="resume">📄 <span>Resume</span></a>
      <a href="profile.html" data-key="profile">👤 <span>Profile</span></a>
    </nav>
    <div class="nav-label">Administration</div>
    <nav class="nav">
      <a href="admin.html" data-key="admin">🛡️ <span>Admin Panel</span></a>
    </nav>
    <div class="user-card">
      <div class="avatar">${initials(student.name)}</div>
      <div style="min-width:0">
        <div class="name">${student.name}</div>
        <div class="email">${student.email}</div>
      </div>
    </div>`;
  const sb = document.getElementById('sidebar');
  sb.innerHTML = html;
  sb.querySelectorAll('a').forEach(a => { if(a.dataset.key === active) a.classList.add('active'); });
  // mobile toggle
  document.getElementById('menu-toggle')?.addEventListener('click', () => sb.classList.toggle('open'));
}

function fmtDate(s){
  const d = new Date(s);
  return d.toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});
}

function opportunityCard(op){
  return `<article class="card opp">
    <div class="opp-head">
      <div class="opp-logo">${op.logo}</div>
      <div style="flex:1;min-width:0">
        <h3 style="font-size:1rem">${op.role}</h3>
        <div style="color:var(--muted);font-size:.85rem">${op.company}</div>
      </div>
      <span class="badge ${op.type==='Internship'?'badge-accent':'badge-primary'}">${op.type}</span>
    </div>
    <div class="opp-meta">
      <span>📍 ${op.location}</span>
      <span>💰 ${op.stipend}</span>
      <span>🎓 CGPA ${op.cgpa}+</span>
    </div>
    <p class="opp-desc">${op.description}</p>
    <div class="opp-skills">${op.skills.map(s=>`<span class="badge">${s}</span>`).join('')}</div>
    <div class="opp-footer">
      <span style="color:var(--muted);font-size:.78rem">Apply by ${fmtDate(op.deadline)}</span>
      <button class="btn btn-primary" onclick="alert('Application submitted for ${op.role} at ${op.company}!')">Apply Now</button>
    </div>
  </article>`;
}
