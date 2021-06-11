import {
  faCheck,
  faChevronRight,
  faCode,
  faCog,
  faEye,
  faFileCode,
  faFileExport,
  faFileImage,
  faFileImport,
  faFilter,
  faKey,
  faList,
  faMousePointer,
  faPlus,
  faProjectDiagram,
  faQuestion,
  faRedoAlt,
  faSearch,
  faStickyNote,
  faSyncAlt,
  faTable,
  faTimes,
  faUndoAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  mdiCodeBrackets,
  mdiCodeJson,
  mdiDatabase,
  mdiDatabaseExport,
  mdiDatabaseImport,
  mdiFormatLetterCase,
  mdiPalette,
  mdiTableCog,
  mdiVectorLine,
  mdiXml,
} from '@mdi/js';

import { IconDefinition } from '@@types/core/icon';
import { RelationshipType } from '@@types/engine/store/relationship.state';

export const createMDI = (name: string, icon: string): IconDefinition => ({
  prefix: 'mdi',
  iconName: name,
  icon: [24, 24, , , icon],
});

const icons = [
  faKey,
  faTable,
  faStickyNote,
  faPlus,
  faTimes,
  faChevronRight,
  faCheck,
  faList,
  faRedoAlt,
  faUndoAlt,
  faSearch,
  faFilter,
  faQuestion,
  faProjectDiagram,
  faFileImage,
  faFileExport,
  faEye,
  faFileImport,
  faFileCode,
  faCog,
  faMousePointer,
  faCode,
  faSyncAlt,
  createMDI('vector-line', mdiVectorLine),
  createMDI('code-json', mdiCodeJson),
  createMDI('database', mdiDatabase),
  createMDI('database-import', mdiDatabaseImport),
  createMDI('database-export', mdiDatabaseExport),
  createMDI('palette', mdiPalette),
  createMDI('format-letter-case', mdiFormatLetterCase),
  createMDI('table-cog', mdiTableCog),
  createMDI('code-brackets', mdiCodeBrackets),
  createMDI('xml', mdiXml),
] as IconDefinition[];

export const getIcon = (prefix: string, iconName: string) =>
  icons.find(icon => icon.prefix === prefix && icon.iconName === iconName);

export const addIcon = (...newIcons: IconDefinition[]) =>
  icons.push(...newIcons);

const base64Icons: Record<string, string> = {
  ZeroOneN:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0RFRDI1RjI0ODY0MTFFN0JEQTA4NTA5QjY4NEI4MzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0RFRDI1RjM0ODY0MTFFN0JEQTA4NTA5QjY4NEI4MzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQTE2QzQzRDQ4NjQxMUU3QkRBMDg1MDlCNjg0QjgzMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQTE2QzQzRTQ4NjQxMUU3QkRBMDg1MDlCNjg0QjgzMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnTT5ywAAAJMSURBVHja7Fc9T2JBFB3MZq1IqLSgsRM6G6TcAmK7VNoRK4yBxE6XP/CsNxBohc6G5w+AoCU0aEWpBfAD4AeM55AZMjvvg2dClsRwkxOeb+7ce+6dmTPPmJRSbNP2xJZtR2DrBH6k0+ndEkSxBHAD9AGpMAJc4Lfh1zDGn4GLgHglNb8kqANhSKVSTiaTkY7jyMFgILWNx2PZ7XZluVyW8BkBJWA1PhwO+f7ZinUO9DmH8xl3XfIGnefzuQwzBsvlcjKIAH4PWAh9zCLq9Xp48mq16knGwASTmkaShULBQ0B1ZlSr1TyFtFqtwOS3xWLxH2eyZctUUOKVFTGRtslk4iHAODZZ/k2yLDKIwLsZjJ2gM3Bo+V0wieu6vsvCCu0ucS+RPHC1vId8kp+YrWRwvHsIWaosO7Nun3DDqn1yD+zr+RQiz3WYz+dXz6iCP82g84lKB4jxF0Rv0G7P+Gw2E6ha9Ho9/eoPsRJAucbUzl53Wi79NmwU25QSJuLx+ObugkqlInD+l8+oTsAny1aHxDlKJpOBgzhBot1ui8Vi4R3cwCY8jbIJeap4JOHvAmd6flDQj+l06ncMD/yktdPp+AoW59nEeBqUnjjAzyACd7YQUcnUxL7CyJZWk7QWIs6xdcLQg6cvSzETEl+Q4iyXkAWZBHU3/stlpLvKpaWkm0sb5Tq+19exqfvWdbyU1gjX8SGLIlnKNJ9jPGYRP0gugQLwS717Az6AB+DJ+CC5Vs8vSkEffeIdK79mVALf95swtvvXbEdg2wQ+BRgAvLABcxKvek4AAAAASUVORK5CYII=',
  ZeroOne:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkExNkM0M0I0ODY0MTFFN0JEQTA4NTA5QjY4NEI4MzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkExNkM0M0M0ODY0MTFFN0JEQTA4NTA5QjY4NEI4MzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQTE2QzQzOTQ4NjQxMUU3QkRBMDg1MDlCNjg0QjgzMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQTE2QzQzQTQ4NjQxMUU3QkRBMDg1MDlCNjg0QjgzMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PomEhhsAAAKSSURBVHja7FexbhpBED0ipFRI7ixBQwlV0nCUWKJIydEkFSRpHCGQ0iXgBqfBbQrAShXzA4BLJJCdEip3UDoSUFvwAZv30B5a1ncHBiSk2CONdrU3O/N2dt6w+IQQxiHllXFgeQFwcAD+aDT6zDPwBNsjaAoaVtbuoNcee46hOSi5/hd6pRv41vUBXJFJJ4FA4FMymTRCodDy22g0Mnq93gOml8Ph8Mxhb71QKOQYYzqdGq1W6zPsVkHwo5tGIpFvsVhMNJtN4Saz2UwUi0UB299QU9u/tBsMBrS51WN4BrcsS4zHY7GJEKQOYmsAMIzz5GrwyWQiSqWSwDXQkchms6LRaCwyoIPYB4Ar3NdyM+cEhPXv0LC0OYH+ZJZUEASG9fdbA2AAnlI9uQwedwF7waC29Pt92t5sCoCN6FzSZCmsdluq1aoxn8+LqN6+E0uwXoKPKNiQ4j7TNA0w5gRLZRdWraz7QZOyTkU6saXb7XL4taZH3IGSKRs4asVA5s5Vg2AwaOTz+QSmCZ2GniLTuI6uFpyLbcRfq9UeHYcZwL0v5mw8SFsYqb73yMBb9Tel3W4zA4s5gC1G2Yget2Lc8Q99MZ1Ol20AmLMOTjE9c7nT1xgstW4qlQrrhn7LNgACgp8/mN56dkKk84hVb1OLo+T+qUv66wi4QlnSeNc+cAG0y81IvyDfZaf7CE1Av5JubE6qSLDxXQEc05ib9HbLvp/JZARPTc6rQjDMyL5+Cz7wKkDDjapZD74zAOngHbRN57wGJyFAmfa6w/71ndCruyBoB0MHlf4FxZUDJd+o7wF8Z7Vfy/dAx8HFJWies1ng+CABqqe8oMIOL6KHDV5ElPt9APj/HqW+l/+Gzx7APwEGACfjkeXK58xsAAAAAElFTkSuQmCC',
  ZeroN:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDc5MkNFMEM0ODY0MTFFN0JEQTA4NTA5QjY4NEI4MzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDc5MkNFMEQ0ODY0MTFFN0JEQTA4NTA5QjY4NEI4MzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NzkyQ0UwQTQ4NjQxMUU3QkRBMDg1MDlCNjg0QjgzMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NzkyQ0UwQjQ4NjQxMUU3QkRBMDg1MDlCNjg0QjgzMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpR0ImIAAALlSURBVHja7Fe/jxJBGF0MyVUk2HgJFJ6NQqUNWEoCkfKWxusozxBI7Eiw8ardKy/hxyVWQqcF8AdA9Eqg8DqwuwJI7Aj8AeN7OEuGhd09tCBRvuTLzA4z37z53rxvF58QQtunPdD2bAcA/mg0+p9nYMf5Qfhz5fnmbwH47iND0PQaTS4QCOiRSGQ1PhgMZmja8OvhcNi/z4aIdc5Ycs1HjQCcHJu9hH/KZrOi0+kIu83nc9FsNkUymRSYZ3jEegqv6bousLHI5/NcU3RbkIa3W62W8DICKZVKDFhziFWMxWKiXq+v1ozHY8Exv0OajpmmSqVyitOtxrvdrjYajZZ90KGlUiktFAot+4ZhcDiHtTOc8L1KHWLoAKiFw+FVrOl0+rvjgNjA5msnJA3MCPxC+hX8DhuvzZN0kDqDfTt1nCPT/w1+tm3zIFPDidYC8oZxc8vcI6ZdBUHKMPadY1YMy0gBY6uxfHhIMBEKAw+BvIUMLB+q1aqG/iXSWnKg6wjND9DzmHQsFgttMploqlpIm2maWr/fv8bj5zUZMrV2KWYymaXTyDMCPgGAOxdpXRQKhQ9I7cZv2FSzDrPVvG44TiLc5CWp0Mnrn5gfxWQDFG8r02nddpwwiAzMXOrLC6d3CtNPWhxLMSjYKKcYe0XZ0OLxOOVHOX1xA6Bybj8MKWg0GjdOFNjTeUL5WNbr9UjDV3jcIf3nVIllrHK8V2xVYxypphr8kbXeidO2ql+WWwnijQrU0rq6mdT4W/gta4ldiuVy2ZJi0Q1AmoHVxTyBDL50/m7XOkETvIxxTL1zHpSwBoJlWBa2mtvNNpky+wmcjJvIk6Vtcc5Y9QjeHovxveRlbiun9tLKVFul1S2W+kJiywx4fg9AXmm+UDD5lIqg3HizwftSYgBHmV1izhXGfnrEeobmHeLkuB7rIj4n+WyTGjwh2xP4rXR+kMx2/BBKyLWzXQD8mx+lvsNfswOAfQP4JcAAK/At0HQvwB8AAAAASUVORK5CYII=',
  OneOnly:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUJCNTBCRDA0ODY0MTFFN0JEQTA4NTA5QjY4NEI4MzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkExNkM0MzQ0ODY0MTFFN0JEQTA4NTA5QjY4NEI4MzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQkI1MEJDRTQ4NjQxMUU3QkRBMDg1MDlCNjg0QjgzMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQkI1MEJDRjQ4NjQxMUU3QkRBMDg1MDlCNjg0QjgzMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pur5d4QAAAE1SURBVHjaYvz//z/DQAImhgEGow4YcAewaGpqjvAQoJI5CUAsD2VPB+JXULY4EGcCMSivPwTiBRgOuH79OkU2A6MwITAwcL6UlBSYP3XqVHGgmVlQufqcnJxMUFnz7NkzhvXr1zMA5VAdAZKkBGtoaBw4derUfxgA8v8jycHFQWpAatH1j2bDUQeACqIGaDahGgClfmLlWIDZpJ7SKhmWBUEgOzsbRDVgUwOUswcy7ZHFGf8PcIOABVhwUGwIsCBiQCqIUOSgIQIviNABI7BwaKDQfodFixbZm5qawuIYRDVC5ephJe3p06cZ4uLiDgKZB0ZLwtGCaNg1SBYAs5c9MJExIDVI4GxgtgQ1SBiePn3KgK1BAsqG1GoRKSA54CVaiwgEHtDSAUM3DTCO9g1HvAMAAgwAvvwYPnW1JuQAAAAASUVORK5CYII=',
  OneN: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkExNkM0Mzc0ODY0MTFFN0JEQTA4NTA5QjY4NEI4MzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkExNkM0Mzg0ODY0MTFFN0JEQTA4NTA5QjY4NEI4MzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQTE2QzQzNTQ4NjQxMUU3QkRBMDg1MDlCNjg0QjgzMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQTE2QzQzNjQ4NjQxMUU3QkRBMDg1MDlCNjg0QjgzMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+BFx8AAAIISURBVHja7Fc9TwJBEF0MLYkdBgot4QdwLSaQSAmNdkCrR61CI9Ud1oCUIB0NYElBtJU/QIkmQKIVgcpqfXPekQNBYu7WM4FJJvs1x87Ovnk7uDjnzEnZYw7LzgHHHXAFAoHtjoDbpt9JQw/1fgX6vsH+CDohdVnlgWAwmE4kElWfz6eNy+Vypd/vX6yx9aK58fv959PplM1mswNGDlhRYOip1+txQzDma+wuoYNSqaTZUYvxnXAHMJag1WQyyYfDITdLJBLhbpEAQ8gVj8eThTBc03weoWeqqrLRaFQREgHoKfQRG3Pc9cKpW60WD4VCZKPS90IiAJA1FEVhkiTN58bjMaNIwNl7yhQA9VlLQ4Qpj9a2J1GWZZbJZBbmkBkMoHtFt6pPxbBvTGNCHZWWNqX7xalXriHkdNfrqZg7XBC4KTxWhSJgENGy0Onb7faPj1He4v7H9Xo9DGRrg1QqpaWY2SEAj+Vyua+0W6ZpQWn4YjCeWYrFIq0NiBWN70U54CWajcfj3LxGQmxIrEjsSCwplIrRP6N1cMI3Qmo2mxohCa0HQDYNNCfASAG8z7rd7nwtGo3+TUECJz6gWfB/DAT1QCAlViSgYq5gBxXXQDZhQrqpIFnlSAdNBwx4BWwUsPk15m7tqgnTepVjOPC2wX5fr4hse4xqv7Sf/J+yfPffcOsd+BRgAOvawAWTC+PMAAAAAElFTkSuQmCC',
  One: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUJCNTBCQ0M0ODY0MTFFN0JEQTA4NTA5QjY4NEI4MzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUJCNTBCQ0Q0ODY0MTFFN0JEQTA4NTA5QjY4NEI4MzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQkI1MEJDQTQ4NjQxMUU3QkRBMDg1MDlCNjg0QjgzMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQkI1MEJDQjQ4NjQxMUU3QkRBMDg1MDlCNjg0QjgzMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnOhfCQAAADcSURBVHjaYvz//z/DQAImhgEGow4YcAewaGpqjvAQoJI5CUAsD2VPB+JXxGpkpLQcAEZhQmBg4HwpKSkwf+rUqdOvX7+eRbQBIAdQgjU0NA6cOnXqPwwA+f9J0T+aDUcdACqIGkBpkZqGAs2sJzobTpky5T+lWRGYDRmkpaXBbKB5JOll/D/ADQIWYMFBsSGgEEAqiEgLAWDB0UCh/Q6LFi2yNzU1hcU/iGocLQlHC6IR1SBZsH79entgQmRAapCQlA2p1SJSQHLAS3o3yRYM2TTAONo3HPEOAAgwAJh583IRUllDAAAAAElFTkSuQmCC',
  N: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDc5MkNFMDg0ODY0MTFFN0JEQTA4NTA5QjY4NEI4MzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDc5MkNFMDk0ODY0MTFFN0JEQTA4NTA5QjY4NEI4MzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNDQwRjc3NTQ4M0MxMUU3QkRBMDg1MDlCNjg0QjgzMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNDQwRjc3NjQ4M0MxMUU3QkRBMDg1MDlCNjg0QjgzMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkbQDKwAAAGjSURBVHja7Jcxb4JQEMefLl272cjSUbYu0g+gSVemdpPZwKzRRSf4AGg70k8AfACTdqx+ibYJLp2MfoDr/wg0vJp2Al6TeskFeQ+4e/fufvdsEJFQKU2hWE4OKHeg0el0TlugQi6h5+kW1MkBXddbuMw0TRvu93txOBwumjUaH+Hy4jjOcLVaCcuyeHgmOAJVKpLcgAaDwYCSJKGi9Hq9yo273W6XwjCUDCP8NJlMCPP3VRm+hT6xETZWlCiKiJ3CvJfmX8mGW7wqDu16vZYMb7db4m3A/CP0On+HQTRHMpRVCiaS7Mq2bWlwuVyKxWLxjp/BEQkxQWWVYr/fF9/JipALrP5nFJPiA0EagbI+BsAI0zSlMV59HMe/NqN5mYg1DMPyPE+02+2vwc1mI6bTKTvzgNsP6Y0KSnAMfctySxLf97kKXqGj/PmqOJCWI7aDsHrJCaZhVo4BU7JqEt5Bn13XPQIS05GBVEcvOGPqsTE0IQnHtThQcOQGGnP4mYpZL/Bqc6CYpFkvGOcoVsEfPg3tVB7Jdn/nWH76b/jvHfgUYADeZNmzPgOYQQAAAABJRU5ErkJggg==',
};

export const getBase64Icon = (relationshipType: RelationshipType) =>
  base64Icons[relationshipType];
