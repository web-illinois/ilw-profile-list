# custom element decorator
fastmod -m -d src -e ts \
  '^ *class *([a-zA-Z][a-zA-Z0-9_]*) *extends *LitElement' \
  ' import { customElement, property, query, state } from "lit/decorators.js";
@customElement('"'"$(basename `pwd`)"'"')
export default class ${1} extends LitElement'

# ts-ignore for CSS import
fastmod -d src -e ts \
  '^(import styles from.*[^\?]+\.css\?inline)' \
  '// @ts-ignore
$1'

# state properties with type
fastmod -m -d src -e ts \
  '(\s*)([a-zA-Z0-9_]+):\s*\{[^}]*state:\s*true[^}]*type:\s*([\w]+)[^}]*\},?' \
  '$1@state() $1$2: $3 = undefined;'
fastmod -m -d src -e ts \
  '(\s*)([a-zA-Z0-9_]+):\s*\{[^}]*type:\s*([\w]+)[^}]*state:\s*true[^}]*\},?' \
  '$1@state() $1$2: $3 = undefined;'

# state properties without type
fastmod -m -d src -e ts \
  '(\s*)([a-zA-Z0-9_]+):\s*\{[^}]*state:\s*true[^}]*\},?' \
  '$1@state() $1$2: string = "";'

# reflect properties with type
fastmod -m -d src -e ts \
  '(\s*)([a-zA-Z0-9_]+):\s*\{[^}]*reflect:\s*true[^}]*type:\s*([\w]+)[^}]*\},?' \
  '$1@property({ reflect: true }) $1$2: $3 = undefined;'
fastmod -m -d src -e ts \
  '(\s*)([a-zA-Z0-9_]+):\s*\{[^}]*type:\s*([\w]+)[^}]*reflect:\s*true[^}]*\},?' \
  '$1@property({ reflect: true }) $1$2: $3 = undefined;'

# reflect properties without type
fastmod -m -d src -e ts \
  '(\s*)([a-zA-Z0-9_]+):\s*\{[^}]*reflect:\s*true[^}]*\},?' \
  '$1@property({ reflect: true }) $1$2: string = "";'

# properties with type
fastmod -m -d src -e ts \
  '(\s*)([a-zA-Z0-9_]+):\s*\{[^}]*type:\s*([\w]+)[^}]*\},?' \
  '$1@property() $1$2: $3 = undefined;'

fastmod -m -d src -e ts \
  ': Boolean' \
  ': boolean'
fastmod -m -d src -e ts \
  ': String' \
  ': string'


# Empty properties
fastmod -m -d src -e ts \
  '(\s*)([a-zA-Z0-9_]+):\s*\{\s*\},?' \
  '$1@property()$1$2:string = "";'

# Convert customElements.define to TypeScript interface
fastmod -m -d src -e ts \
  'customElements\.define\(['"'"'"]([a-zA-Z0-9\-]+)['"'"'"], ([A-Za-z0-9_]+)\);' \
  'declare global {
interface HTMLElementTagNameMap {
    "$1": $2;
  }
}'

# Remove the first part of the static get properties()
fastmod -m -d src -e ts \
  '^\s*static get properties\(\) \{[\n\s]*return *\{' \
  ''