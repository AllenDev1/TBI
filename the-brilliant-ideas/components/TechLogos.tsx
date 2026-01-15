import React from 'react';
import * as SimpleIcons from 'simple-icons';

interface LogoProps {
  className?: string;
  color?: string;
}

const createIconComponent = (iconSlug: string, defaultColor: string) => {
  return ({ className = "w-6 h-6", color }: LogoProps) => {
    const iconKey = `si${iconSlug.charAt(0).toUpperCase() + iconSlug.slice(1)}` as keyof typeof SimpleIcons;
    const icon = SimpleIcons[iconKey] as any;
    if (!icon || !icon.path) return null;

    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill={color || defaultColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icon.path} />
      </svg>
    );
  };
};

export const ReactLogo = createIconComponent('react', '#61DAFB');
export const NextJsLogo = createIconComponent('nextdotjs', '#000000');
export const VueLogo = createIconComponent('vuedotjs', '#4FC08D');
export const TypeScriptLogo = createIconComponent('typescript', '#3178C6');
export const TailwindLogo = createIconComponent('tailwindcss', '#06B6D4');

export const NodeJsLogo = createIconComponent('nodedotjs', '#339933');
export const PythonLogo = createIconComponent('python', '#3776AB');
export const PHPLogo = createIconComponent('php', '#777BB4');
export const JavaLogo = createIconComponent('java', '#007396');
export const GraphQLLogo = createIconComponent('graphql', '#E10098');

export const ReactNativeLogo = createIconComponent('react', '#61DAFB');
export const FlutterLogo = createIconComponent('flutter', '#02569B');
export const SwiftLogo = createIconComponent('swift', '#F05138');
export const KotlinLogo = createIconComponent('kotlin', '#7F52FF');
export const IonicLogo = createIconComponent('ionic', '#3880FF');

export const AWSLogo = createIconComponent('amazonaws', '#FF9900');
export const AzureLogo = createIconComponent('microsoftazure', '#0078D4');
export const DockerLogo = createIconComponent('docker', '#2496ED');
export const FirebaseLogo = createIconComponent('firebase', '#FFCA28');
export const VercelLogo = createIconComponent('vercel', '#000000');

export const FigmaLogo = createIconComponent('figma', '#F24E1E');
export const AdobeXDLogo = createIconComponent('adobexd', '#FF61F6');
export const PhotoshopLogo = createIconComponent('adobephotoshop', '#31A8FF');
export const IllustratorLogo = createIconComponent('adobeillustrator', '#FF9A00');
export const SketchLogo = createIconComponent('sketch', '#F7B500');

export const MongoDBLogo = createIconComponent('mongodb', '#47A248');
export const PostgreSQLLogo = createIconComponent('postgresql', '#4169E1');
export const MySQLLogo = createIconComponent('mysql', '#4479A1');
export const RedisLogo = createIconComponent('redis', '#DC382D');
export const SupabaseLogo = createIconComponent('supabase', '#3ECF8E');

// Additional Frontend
export const AngularLogo = createIconComponent('angular', '#DD0031');
export const SvelteLogo = createIconComponent('svelte', '#FF3E00');
export const SassLogo = createIconComponent('sass', '#CC6699');
export const BootstrapLogo = createIconComponent('bootstrap', '#7952B3');

// Additional Backend
export const LaravelLogo = createIconComponent('laravel', '#FF2D20');
export const DjangoLogo = createIconComponent('django', '#092E20');
export const FastAPILogo = createIconComponent('fastapi', '#009688');
export const ExpressLogo = createIconComponent('express', '#000000');
export const NestJSLogo = createIconComponent('nestjs', '#E0234E');

// Additional Mobile
export const AndroidLogo = createIconComponent('android', '#3DDC84');
export const iOSLogo = createIconComponent('apple', '#000000');

// Additional Cloud & DevOps
export const KubernetesLogo = createIconComponent('kubernetes', '#326CE5');
export const GitHubLogo = createIconComponent('github', '#181717');
export const GitLabLogo = createIconComponent('gitlab', '#FC6D26');
export const JenkinsLogo = createIconComponent('jenkins', '#D24939');
export const TerraformLogo = createIconComponent('terraform', '#7B42BC');

// Additional Database
export const ElasticsearchLogo = createIconComponent('elasticsearch', '#005571');
export const CassandraLogo = createIconComponent('apachecassandra', '#1287B1');
export const SQLiteLogo = createIconComponent('sqlite', '#003B57');

// CMS & E-commerce
export const WordPressLogo = createIconComponent('wordpress', '#21759B');
export const ShopifyLogo = createIconComponent('shopify', '#7AB55C');
export const WooCommerceLogo = createIconComponent('woocommerce', '#96588A');
export const StrapiLogo = createIconComponent('strapi', '#2F2E8B');

// Testing & Quality
export const JestLogo = createIconComponent('jest', '#C21325');
export const CypressLogo = createIconComponent('cypress', '#17202C');
export const PlaywrightLogo = createIconComponent('playwright', '#2EAD33');
