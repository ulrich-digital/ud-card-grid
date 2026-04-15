import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		background,
		title,
		eyebrow,
		text
	} = attributes;

const hasEyebrow = !!attributes.eyebrow;

const blockProps = useBlockProps.save({
	className: [
		'ud-card-grid-item',
		`ud-card-grid-item--${background}`,
		hasEyebrow && 'ud-card-grid-item--has-eyebrow'
	].filter(Boolean).join(' ')
});


	return (
		<div {...blockProps}>
			<div className="ud-card-grid-item__inner">
				{title && (
					<RichText.Content
						tagName="h3"
						className="ud-card-grid-item__title"
						value={title}
					/>
				)}

				<div className="ud-card-grid-item__divider" />

				{eyebrow && (
					<RichText.Content
						tagName="p"
						className="ud-card-grid-item__eyebrow"
						value={eyebrow}
					/>
				)}

				{text && (
					<RichText.Content
						tagName="p"
						className="ud-card-grid-item__text"
						value={text}
					/>
				)}
			</div>
		</div>
	);
}