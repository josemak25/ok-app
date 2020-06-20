const COLORS = ['#CF36E3', '#E3CF36', '#3636E3', '#59C36A',
  '#4175DF', '#18A66C', '#F0381B', '#36E67F', '#65E336', '#36E3D6', '#A41324',
  '#BC8034', '#685B50', '#DE5456', '#483348', '#3A015C', '#4F0147', '#2A9D8F',
  '#E76F51', '#3A86FF', '#FF006E', '#FFBE0B', '#3A0CA3', '#7209B7'
]

export default function generateColor(tagsLength: number) {
  const tabIndex = Math.floor(Math.random() * Math.ceil(COLORS.length / tagsLength))
  return COLORS.slice(tabIndex, tabIndex + tagsLength);
}

