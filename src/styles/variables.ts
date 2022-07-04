const size = {
	mobile: '480px',
	mobileLarger: '600px',
	tablet: '768px',
	laptop: '1024px',
	desktop: '1200px'
}

export const device = {
	mobile: `(max-width: ${size.mobile})`,
	mobileLarger: `(max-width: ${size.mobileLarger})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	desktop: `(max-width: ${size.desktop})`,
};
