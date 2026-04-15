import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { itemMaxWidth, gap } = attributes;

	const blockProps = useBlockProps.save({
		className: "ud-card-grid",
		style: {
			"--ud-card-grid-item-max-width": itemMaxWidth,
			"--ud-card-grid-gap": gap
		}
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}