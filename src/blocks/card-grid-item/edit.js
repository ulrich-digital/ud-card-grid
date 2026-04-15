import { __ } from "@wordpress/i18n";
import { SelectControl, PanelBody } from "@wordpress/components";
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
	const { background, title, eyebrow, text } = attributes;

const hasEyebrow = !!attributes.eyebrow;

const blockProps = useBlockProps({
	className: [
		'ud-card-grid-item',
		`ud-card-grid-item--${background}`,
		hasEyebrow && 'ud-card-grid-item--has-eyebrow'
	].filter(Boolean).join(' ')
});

	return (
		<>
			<InspectorControls>
				<PanelBody title="Design">
					<SelectControl
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
						label="Hintergrund"
						value={background}
						options={[
							{
								label: "Holz (Material)",
								value: "material-holz",
							},
							{
								label: "Stein (Material)",
								value: "material-stein",
							},
							{
								label: "Glas (Material)",
								value: "material-glas",
							},
							{
								label: "Metall (Material)",
								value: "material-metall",
							},

							{ label: "Holz (Wu Xing)", value: "element-holz" },
							{
								label: "Feuer (Wu Xing)",
								value: "element-feuer",
							},
							{ label: "Erde (Wu Xing)", value: "element-erde" },
							{
								label: "Metall (Wu Xing)",
								value: "element-metall",
							},
							{
								label: "Wasser (Wu Xing)",
								value: "element-wasser",
							},
						]}
						onChange={(value) =>
							setAttributes({ background: value })
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="ud-card-grid-item__inner">
					<RichText
						tagName="h3"
						className="ud-card-grid-item__title"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
						placeholder={__("Titel eingeben …", "ud-card-grid-ud")}
						allowedFormats={[]}
					/>

					<div className="ud-card-grid-item__divider" />

					<RichText
						tagName="p"
						className="ud-card-grid-item__eyebrow"
						value={eyebrow}
						onChange={(value) => setAttributes({ eyebrow: value })}
						placeholder={__(
							"Kurze Einleitung …",
							"ud-card-grid-ud"
						)}
						allowedFormats={[]}
					/>

					<RichText
						tagName="p"
						className="ud-card-grid-item__text"
						value={text}
						onChange={(value) => setAttributes({ text: value })}
						placeholder={__("Text eingeben …", "ud-card-grid-ud")}
					/>
				</div>
			</div>
		</>
	);
}
