import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl
} from "@wordpress/components";

const ALLOWED_BLOCKS = ["ud/card-grid-item"];

const TEMPLATE = [
	["ud/card-grid-item"],
	["ud/card-grid-item"],
	["ud/card-grid-item"],
	["ud/card-grid-item"]
];

export default function Edit({ attributes, setAttributes }) {
	const { itemMaxWidth, gap } = attributes;

	const blockProps = useBlockProps({
		className: "ud-card-grid",
		style: {
			"--ud-card-grid-item-max-width": itemMaxWidth,
			"--ud-card-grid-gap": gap
		}
	});

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Grid-Einstellungen", "ud-card-grid-ud")}
					initialOpen={true}
				>
					<TextControl
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
						label={__("Maximale Kartenbreite", "ud-card-grid-ud")}
						value={itemMaxWidth}
						onChange={(value) => setAttributes({ itemMaxWidth: value })}
						help={__("Beispiel: 420px, 24rem oder 30%", "ud-card-grid-ud")}
					/>

					<TextControl
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
						label={__("Abstand zwischen Karten", "ud-card-grid-ud")}
						value={gap}
						onChange={(value) => setAttributes({ gap: value })}
						help={__("Beispiel: 24px, 2rem", "ud-card-grid-ud")}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={TEMPLATE}
					renderAppender={InnerBlocks.ButtonBlockAppender}
				/>
			</div>
		</>
	);
}