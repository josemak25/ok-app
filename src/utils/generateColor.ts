const colors = ['#AAC9CE', '#B6B4C2', '#C9BBCB', '#E5C1CD', '#F3DBCF', '#CF36E3', '#E3CF36', '#3636E3', '#59C36A',
  '#4175DF', '#18A66C', '#F0381B', '#36E67F', '#F64E1F', '#65E336', '#36E3D6', '#E34336', '#58BE96'
]

export default function generateColor() {
  const color = Math.floor(Math.random() * colors.length);
  return colors[color];
}
