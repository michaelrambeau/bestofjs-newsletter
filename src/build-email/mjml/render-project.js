const isUrl = input => input.startsWith('http')

const formatIconUrl = input =>
  isUrl(input) ? input : `https://bestof.js.org/logos/${input}`

const formatOwnerAvatar = (owner_id, size) =>
  `https://avatars.githubusercontent.com/u/${owner_id}?v=3&s=${size}`

function getProjectAvatarUrl(project, size) {
  return project.icon
    ? formatIconUrl(project.icon)
    : formatOwnerAvatar(project.owner_id, size)
}

function getUrl(project) {
  return project.url ? project.url : `https://github.com/${project.full_name}`
}

function renderProject(project) {
  const size = 75
  const iconUrl = getProjectAvatarUrl(project, size)
  const url = getUrl(project)
  return `
<mj-section background-color="white">
  <mj-column width="20%" background-color="#fff">
    <mj-image src="${iconUrl}" width="${size}" height="${size}"></mj-image>
  </mj-column>
  <mj-column width="80%" background-color="#fff">
    <mj-text padding="20px" font-size="18px">
      <a href="${url}">${project.name}</a> +${project.weekly} stars this week
    </mj-text>
    <mj-divider border-width="1px" border-style="dashed" border-color="#cbcbcb" padding="0 20px 0 0" />
    <mj-text padding="20px">${project.description}</mj-text>
  </mj-column>
</mj-section>
  `
}

module.exports = renderProject
