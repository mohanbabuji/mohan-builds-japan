import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  featured = false
}) => {
  return (
    <div className={`group relative bg-surface rounded-2xl overflow-hidden shadow-soft card-hover ${
      featured ? 'md:col-span-2' : ''
    }`}>
      {/* Project Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Quick Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <ExternalLink className="h-4 w-4 text-white" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <Github className="h-4 w-4 text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-heading mb-3 group-hover:text-brand-primary transition-colors">
          <Link to={`/project/${id}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        
        <p className="text-body mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 text-text-muted text-xs font-medium rounded-md">
              +{technologies.length - 4} more
            </span>
          )}
        </div>

        {/* View Project Link */}
        <Link
          to={`/project/${id}`}
          className="inline-flex items-center text-sm font-medium text-brand-primary hover:text-brand-secondary transition-colors"
        >
          View Project Details
          <ExternalLink className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  );
};